/* eslint-disable-next-line */
// @ts-nocheck
import { applySnapshot } from 'mobx-state-tree';
import { StoreType } from '..';

export function countAction({ counts }: StoreType) {
  function increment() {
    applySnapshot(counts, { count: (counts.count += 1) });
  }
  function decrement() {
    applySnapshot(counts, { count: (counts.count -= 1) });
  }
  return { increment, decrement };
}
