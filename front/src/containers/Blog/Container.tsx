import React from 'react';
import { BlogState, Post } from '@src/features/blog/types';
import Presenter from './Presenter';

interface Props {
  blog: BlogState;
  searchBlog: (link: string) => void;
  searchPostRank: (post: Post, keyword: string) => void;
  checkPostExistence: (post: Post, keyword: string) => void;
}

const defaultProps = {
  searchBlog: () => console.warn('no function'),
  searchPostRank: () => console.warn('no function'),
};

const Container: React.FC<Props> = (props: Props): React.ReactElement => {
  const { blog, searchBlog, checkPostExistence, searchPostRank } = props;

  const handleSearchBlog = (link: string) => {
    if (!link) {
      alert('주소를 입력해주세요.');
    }
    searchBlog(link);
  };

  const handleSearchPostRank = (post: Post, keyword: string) => {
    if (!post || !keyword) {
      alert('잘못된 요청입니다.');
      return;
    }
    searchPostRank(post, keyword);
  };

  const handleCheckPostExistence = (post: Post) => {
    if (!post) {
      return;
    }
    checkPostExistence(post, `"${post.title}"`);
  };

  return (
    <Presenter
      blog={blog}
      handleSearchBlog={handleSearchBlog}
      handleSearchPostRank={handleSearchPostRank}
      handleCheckPostExistence={handleCheckPostExistence}
    />
  );
};

Container.defaultProps = defaultProps;

export default Container;
