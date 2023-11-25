import { Modals } from '@/components/modal';
import { ModalState } from '@/recoil/system';
import { useSetRecoilState } from 'recoil';

interface onModalArgs {
  type: keyof typeof Modals;
  payload?: { [key: string]: any };
}

export const useModal = () => {
  const setModalState = useSetRecoilState(ModalState);
  const hash = Math.random().toString(36).substring(2, 11) + `${new Date().getTime()}`;

  const onModal = ({ type, payload }: onModalArgs) => {
    setModalState((prev) => [
      ...prev,
      {
        hash,
        type,
        payload,
      },
    ]);
  };

  return {
    onModal,
  };
};
