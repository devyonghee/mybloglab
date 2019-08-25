import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import Presenter from './Presenter';
import { Blog, Post } from '@src/models/Blog';

interface Props {
  blog: Blog | null;
  searchBlog: (link: string) => void;
  searchPostRank: (post: Post, keyword: string) => void;
}

const defaultProps = {
  blog: null,
  searchBlog: (_: string) => console.warn('no function'),
  searchPostRank: (post: Post, keyword: string) => console.warn('no function'),
};

const Container: React.FC<Props> = (props: Props): React.ReactElement => {
  const [link, setLink] = useState('https://blog.naver.com/smileric');
  const linkRef = useRef<HTMLInputElement>(null);

  const { searchBlog, searchPostRank } = props;

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setLink(event.currentTarget.value);
  };

  const searchBlogLink = () => {
    if (!link) {
      linkRef.current && linkRef.current.focus();
      return alert('링크를 입력해주세요.');
    }
    searchBlog(link);
  };

  const handleLinkKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() !== 'enter') return;
    return searchBlogLink();
  };

  const handleLinkSearchBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return searchBlogLink();
  };

  const handleSearchPostRank = (post: Post, keyword: string) => {
    if (!post || !keyword) return alert('잘못된 요청입니다.');
    searchPostRank(post, keyword);
  };

  return (
    <Presenter
      link={link}
      handleLinkChange={handleLinkChange}
      handleLinkKeyPress={handleLinkKeyPress}
      handleLinkSearchBtnClick={handleLinkSearchBtnClick}
      handleSearchPostRank={handleSearchPostRank}
      linkRef={linkRef}
      {...props}/>
  );
};

Container.defaultProps = defaultProps;

export default Container;