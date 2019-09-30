import React from 'react';
import Presenter from './Presenter';

interface Props {
  searchKeyword: (keyword: string) => void;
}

const defaultProps = {};

const Container: React.FC<Props> = (props: Props): React.ReactElement => {
  const { searchKeyword } = props;

  const handleSearchKeyword = (keyword: string) => {
    if (!keyword) {
      alert('키워드가 존재하지 않습니다.');
      return;
    }
    searchKeyword(keyword);
  };

  return <Presenter handleSearchKeyword={handleSearchKeyword} />;
};

Container.defaultProps = defaultProps;

export default Container;
