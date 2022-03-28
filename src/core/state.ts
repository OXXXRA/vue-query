import { ref } from 'vue';
import { StateQuery } from '../types';
export const state = ref<StateQuery>({});

export const addQueryItem = (key: string) => {
  state.value[key] = {};
}

export const addDataToQueryItem = (key: string, payload: unknown) => {
  state.value[key].data = payload;
};

export const addErrorToQueryItem = (key: string, payload: unknown) => {
  state.value[key].error = payload;
};
