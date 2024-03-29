import { atom, selector } from 'recoil';
import type { archiveTasks } from '~/data/mock/archive/interface';
import { mockArchive } from '~/data/mock/archive/mock';
import { recoilKeySuffix } from '~/utils/recoil-key';

export const userArchive = atom<archiveTasks>({
  key: `userArchive${recoilKeySuffix}`,
  default: process.env.NODE_ENV === 'development' ? mockArchive : mockArchive,
});

export const userArchiveSelector = selector({
  key: `userArchiveSelector${recoilKeySuffix}`,
  get: ({ get }) => {
    const getUserArchive = get(userArchive);
    const outputUserArchive = getUserArchive.outputTasks();
    return outputUserArchive;
  },
});
