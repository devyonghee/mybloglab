import React from 'react';
import Presenter from './Presenter';

interface Props {}

const defaultProps = {};

const Container: React.FC<Props> = (): React.ReactElement => {
  return <Presenter />;
};

Container.defaultProps = defaultProps;

export default Container;
