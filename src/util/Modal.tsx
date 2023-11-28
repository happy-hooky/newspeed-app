import { getModal } from '@/components/modal';
import { ModalState } from '@/recoil/atom/system';
import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';

const Modal = () => {
  const modalState = useRecoilValue(ModalState);

  return (
    <>
      {modalState.map((instance) => (
        <Fragment key={instance.hash}>{getModal(instance)}</Fragment>
      ))}
    </>
  );
};

export default Modal;
