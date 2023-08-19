import { Modals } from '@/components/modal';
import { ModalState } from '@/recoil/system';
import { useRecoilState } from 'recoil';

interface onModalArgs {
  type: keyof typeof Modals;
  payload?: { [key: string]: any };
}

export const useModal = () => {
  const [modalState, setModalState] = useRecoilState(ModalState);
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

  const closeModal = () => {
    setModalState((prev) => prev.filter((curr) => curr.hash !== hash));
  };

  const deleteModal = (type: keyof typeof Modals) => {
    console.log(modalState);
    const deleteModalHash = modalState.filter((prev) => prev.type === type)[0].hash;
    setModalState((prev) => prev.filter((curr) => curr.hash !== deleteModalHash));
  };

  return {
    onModal,
    closeModal,
    deleteModal,
  };
};
