import { state, addQueryItem, addDataToQueryItem, addErrorToQueryItem } from '../../src/core/state';

describe('test', () => {
  it('addQueryItem', () => {
    addQueryItem('key');
    expect(state['key']).toBeTruthy();
  });
  it('AddDataToQueryItem', () => {
    addDataToQueryItem('key', 'test');
    expect(state['key'].data).toBe('test');
  });
  it('AddErrorToQueryItem', () => {
    addErrorToQueryItem('key', 'test');
    expect(state['key'].error).toBe('test');
  });
});