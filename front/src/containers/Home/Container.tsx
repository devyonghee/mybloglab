import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { Blog, Post } from '@src/models/Blog';
import Presenter from './Presenter';

interface Props {
  blog: Blog | null;
  searchBlog: (link: string) => void;
  searchPostRank: (post: Post, keyword: string) => void;
}

const defaultProps = {
  blog: null,
  searchBlog: () => console.warn('no function'),
  searchPostRank: () => console.warn('no function'),
};

const Container: React.FC<Props> = (props: Props): React.ReactElement => {
  const [link, setLink] = useState('https://blog.naver.com/smileric');
  const linkRef = useRef<HTMLInputElement>(null);

  const { blog, searchBlog, searchPostRank } = props;

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setLink(event.currentTarget.value);
  };

  const searchBlogLink = () => {
    if (!link) {
      if (linkRef.current) linkRef.current.focus();
      alert('링크를 입력해주세요.');
    }
    searchBlog(link);
  };

  const handleLinkKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() !== 'enter') return;
    searchBlogLink();
  };

  const handleLinkSearchBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return searchBlogLink();
  };

  const handleSearchPostRank = (post: Post, keyword: string) => {
    if (!post || !keyword) {
      alert('잘못된 요청입니다.');
      return;
    }
    searchPostRank(post, keyword);
  };

  return (
    <Presenter
      blog={blog}
      link={link}
      handleLinkChange={handleLinkChange}
      handleLinkKeyPress={handleLinkKeyPress}
      handleLinkSearchBtnClick={handleLinkSearchBtnClick}
      handleSearchPostRank={handleSearchPostRank}
      linkRef={linkRef}
    />
  );
};

Container.defaultProps = defaultProps;

export default Container;
