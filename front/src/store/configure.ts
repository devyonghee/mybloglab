import storeDev from './configure.dev';
import storeProd from './configure.prod';

const selectedConfigureStore = process.env.NODE_ENV === 'production' ? storeProd : storeDev;
export const { configureStore: configure, history } = selectedConfigureStore;