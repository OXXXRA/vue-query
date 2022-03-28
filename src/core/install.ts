import { App, ref } from 'vue';
import { state, addQueryItem, addDataToQueryItem, addErrorToQueryItem } from '../../src/core/state';

const injectKey = ('vue-query');
export const install = (app: App) => {
  app.provide(injectKey, {
    state,
  });
}