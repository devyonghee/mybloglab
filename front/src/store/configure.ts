import storeDev from './configure.dev';
import storeProd from './configure.prod';
import { ConfigureStore } from './types';

const selectedConfigureStore: ConfigureStore =
  process.env.NODE_ENV === 'production' ? storeProd : storeDev;

export const { configureStore, history } = selectedConfigureStore;
