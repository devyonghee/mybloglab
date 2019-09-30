import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Post } from '@src/features/blog/types';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { green, grey, red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { useMountEffect } from '@src/utils/useMounts';
import { withStyles } from '@material-ui/styles';
import SearchTextFiled from '@src/components/SearchTextFiled';

const useIconStyles = makeStyles(() => ({
  progress: {
    color: grey[800],
  },
  check: {
    color: green[800],
  },
  highlightOff: {
    color: red[800],
  },
}));

const ExistIcon: React.FC<Post['isExist']> = (props: Post['isExist']) => {
  const classes = useIconStyles();
  const { value, loading } = props;

  if (loading) {
    return <CircularProgress className={classes.progress} size={25} />;
  }

  return value ? (
    <CheckCircleOutlinedIcon className={classes.check} fontSize="large" />
  ) : (
    <HighlightOffOutlinedIcon className={classes.highlightOff} fontSize="large" />
  );
};

const RankIcon: React.FC<Post['rank']> = ({ loading, value }: Post['rank']) => {
  const classes = useIconStyles();

  if (loading) return <CircularProgress className={classes.progress} size={25} />;

  if (typeof value === 'undefined') return <Typography variant="h6" />;

  return value ? <Typography variant="h6">{value}</Typography> : <ClearOutlinedIcon />;
};

const PostSearchField = withStyles({
  root: {
    display: 'flex',
  },
  textField: {
    width: '150px',
  },
  button: {
    top: '12px',
    color: grey[500],
  },
})(SearchTextFiled);

interface Props {
  post: Post;
  handleSearchPostRank: (keyword: string) => void;
  checkExistence: () => void;
}

const defaultProps = {
  handleSearchPostRank: () => console.warn('no function'),
  checkExistence: () => console.warn('no function'),
};

const naverSearchHref = (title: string): string => {
  const parameter = { where: 'post', query: `"${title}"` };
  const urlSearchParams = new URLSearchParams(parameter);
  return `https://search.naver.com/search.naver?${urlSearchParams}`;
};

const PostRow: React.FC<Props> = (props: Props) => {
  const { post, handleSearchPostRank, checkExistence } = props;

  useMountEffect(() => {
    if (typeof post.isExist.value === 'undefined') checkExistence();
  });

  return (
    <TableRow key={post.title}>
      <TableCell component="th" scope="row">
        {post.link ? (
          <Link component="a" target="_blank" href={post.link.href}>
            {post.title}
          </Link>
        ) : (
          post.title
        )}
        <Button href={naverSearchHref(post.title)} target="_blank" size="small">
          검색
        </Button>
      </TableCell>
      <TableCell>
        <ExistIcon loading={post.isExist.loading} value={post.isExist.value} />
      </TableCell>
      <TableCell>
        <PostSearchField label="키워드" required onSearch={handleSearchPostRank} />
      </TableCell>
      <TableCell>
        <RankIcon loading={post.rank.loading} value={post.rank.value} />
      </TableCell>
    </TableRow>
  );
};

PostRow.defaultProps = defaultProps;

export default PostRow;
