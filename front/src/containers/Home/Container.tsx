import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import Presenter from './Presenter';
import { Blog } from '../../models/Blog';

type Props = {
  blog: Blog | null;
  searchKeyword: (keyword: string) => void;
}

const defaultProps = {
  blog: null,
  searchKeyword: (_: string) => console.warn('no function'),
};

const Container: React.FC<Props> = (props: Props): React.ReactElement => {
  const [link, setLink] = useState('https://blog.naver.com/smileric');
  const linkRef = useRef<HTMLInputElement>(null);

  const { searchKeyword } = props;

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setLink(event.currentTarget.value);
  };

  const searchLink = () => {
    if (!link) {
      linkRef.current && linkRef.current.focus();
      return alert('링크를 입력해주세요.');
    }
    searchKeyword(link);
  };

  const handleLinkKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() !== 'enter') return;
    return searchLink();
  };

  const handleLinkSearchBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return searchLink();
  };

  return (
    <Presenter
      link={link}
      handleLinkChange={handleLinkChange}
      handleLinkKeyPress={handleLinkKeyPress}
      handleLinkSearchBtnClick={handleLinkSearchBtnClick}
      linkRef={linkRef}
      {...props}/>
  );
};

Container.defaultProps = defaultProps;

export default Container;