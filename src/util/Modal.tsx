import { getModal } from '@/components/modal';
import { ModalState } from '@/recoil/system';
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';

const Modal = () => {
  const [modalState, setModalState] = useRecoilState(ModalState);

  return (
    <>
      {modalState.map((instance) => (
        <Fragment key={instance.hash}>{getModal(instance)}</Fragment>
      ))}
    </>
  );
};

export default Modal;
