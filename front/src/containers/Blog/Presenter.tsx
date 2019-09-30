import React from 'react';
import Layout from '@src/layouts/base/Layout';
import PostList from '@src/components/PostList';
import { BlogState, Post } from '@src/features/blog/types';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/styles';
import SearchTextFiled from '@src/components/SearchTextFiled';
import useStyles from './style';

interface Props {
  blog: BlogState;
  handleSearchBlog: (link: string) => void;
  handleSearchPostRank: (post: Post, keyword: string) => void;
  handleCheckPostExistence: (post: Post) => void;
}

const BlogSearchFiled = withStyles(theme => ({
  textField: {
    display: 'inline-flex',
    marginTop: theme.spacing(5),
    width: '60vw',
    maxWidth: '400px',
  },

  button: {
    transform: 'translateY(39px)',
    borderRadius: '10%',
    height: '57px',
    width: '57px',
  },
}))(SearchTextFiled);

const Presenter: React.FC<Props> = (props: Props): React.ReactElement => {
  const classes = useStyles();
  const { blog, handleSearchBlog, handleSearchPostRank, handleCheckPostExistence } = props;
  return (
    <Layout>
      <BlogSearchFiled
        onSearch={handleSearchBlog}
        required
        label="블로그 사이트"
        variant="outlined"
        autoFocus
        margin="normal"
      />
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
