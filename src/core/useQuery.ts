import { computed } from 'vue';
import { state, addQueryItem, addDataToQueryItem, addErrorToQueryItem } from '../../src/core/state';
import { Response, UseQuery } from '../types/';


export const useQuery = (key: string, req: () => Promise<Response>): UseQuery => {
  if (!key) throw new Error('need key for state'),
  addQueryItem(key);
  req()
    .then((res: Response) => {
      if (res.status === 200) addDataToQueryItem(key, res.data);
      if (res.status !== 200) addErrorToQueryItem(key, res?.error);
    })
    .catch((err) => {
      addErrorToQueryItem(key, err);
    });
  return {
    data: computed(() => state?.value[key]?.data),
    error: computed(() => state?.value[key]?.error),
  }
};