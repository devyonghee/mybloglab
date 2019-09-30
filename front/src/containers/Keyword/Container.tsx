import React from 'react';
import Presenter from './Presenter';

interface Props {}

const defaultProps = {};

const Container: React.FC<Props> = (): React.ReactElement => {
  const handleSearchKeyword = (keyword: string) => {
    console.log(keyword);
  };

  return <Presenter handleSearchKeyword={handleSearchKeyword} />;
};

Container.defaultProps = defaultProps;

export default Container;
