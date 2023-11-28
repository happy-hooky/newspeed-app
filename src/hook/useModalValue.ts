import { ModalState } from '@/recoil/atom/system';
import { useRecoilState } from 'recoil';

export const useModalValue = (hash: string) => {
  const [modalState, setModalState] = useRecoilState(ModalState);
  const modal = modalState.filter((prev) => prev.hash === hash)[0];

  const deleteModal = () => {
    setModalState((prev) => prev.filter((curr) => curr.hash !== modal.hash));
  };

  return {
    deleteModal,
  };
};
