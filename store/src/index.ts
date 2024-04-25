/* eslint-disable-next-line */
// @ts-nocheck
import { Instance, types } from 'mobx-state-tree';
import { counts } from './count';
import { countAction } from './count/action';

export const Store = types
  .model('store', {
    counts: counts,
  })
  .actions(countAction);

export const store = Store.create({
  counts: {
    count: 0,
  },
});
export type StoreType = Instance<typeof Store>;
