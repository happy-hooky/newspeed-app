import { Modals } from '@/components/modal';

import { atom } from 'recoil';

type ModalType = keyof typeof Modals;

export const ModalState = atom<
  Array<{
    hash: string;
    type: ModalType;
    payload?: { [key: string]: any };
  }>
>({
  key: 'modalState',
  default: [],
});

export const StorageState = atom<{ [key: string]: string | null }>({
  key: 'storageState',
  default: {},
});
