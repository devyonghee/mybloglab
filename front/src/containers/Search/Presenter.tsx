import React, { RefObject } from 'react';
import Layout from '@src/layouts/base/Layout';
import MyTextField from '@src/components/TextField';
import PostList from '@src/components/PostList';
import { Blog, Post } from '@src/models/Blog';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import useStyles from './style';

interface Props {
  blog: Blog | null;
  link?: string;
  handleLinkChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLinkKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleLinkSearchBtnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleSearchPostRank: (post: Post, keyword: string) => void;
  handleCheckPostExistence: (post: Post) => void;
  linkRef: RefObject<HTMLInputElement>;
}

const Presenter: React.FC<Props> = (props: Props): React.ReactElement => {
  const classes = useStyles();
  const {
    blog,
    link,
    linkRef,
    handleLinkChange,
    handleLinkKeyPress,
    handleLinkSearchBtnClick,
    handleSearchPostRank,
    handleCheckPostExistence,
  } = props;
  return (
    <Layout>
      <MyTextField
        required
        className={classes.linkTextField}
        onChange={handleLinkChange}
        inputProps={{
          onKeyPress: handleLinkKeyPress,
        }}
        value={link || ''}
        id="keyword"
        label="블로그 사이트"
        variant="outlined"
        autoFocus
        margin="normal"
        inputRef={linkRef}
      />
      <IconButton onClick={handleLinkSearchBtnClick} className={classes.searchButton}>
        <SearchIcon />
      </IconButton>
      {blog && (
        <div className={classes.blog}>
          {blog.image && (
            <Avatar alt={blog.title} src={blog.image.href} className={classes.avatar} />
          )}
          <Typography className={classes.blogTitle}>
            {blog.link ? (
              <Link target="_blank" href={blog.link.href} component="a">
                {blog.title}
              </Link>
            ) : (
              blog.title
            )}
          </Typography>
        </div>
      )}
      <PostList
        handleSearchPostRank={handleSearchPostRank}
        handleCheckExistence={handleCheckPostExistence}
        blogger={blog && blog.link ? blog.link.href : ''}
        posts={blog ? blog.posts : []}
      />
    </Layout>
  );
};

export default Presenter;
