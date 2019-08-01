import storeDev from './configure.dev';
import storeProd from './configure.prod';
import { Store } from 'redux';
import { History } from 'history';

interface ConfigureStore {
  configureStore: () => Store;
  history: History
}

const selectedConfigureStore: ConfigureStore = process.env.NODE_ENV === 'production' ? storeProd : storeDev;
export const { configureStore, history } = selectedConfigureStore;