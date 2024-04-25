import { Instance, types } from 'mobx-state-tree';

export const counts = types.model('counts', {
  count: types.number,
});

/* eslint-disable-next-line */
export interface countStoreType extends Instance<typeof counts> {}
