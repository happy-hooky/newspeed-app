import SelectBoxModal from './SelectBoxModal';

export const Modals = { selectBoxModal: SelectBoxModal };

export interface ModalProps {
  hash: string;
  type: keyof typeof Modals;
  payload?: { [key: string]: any };
}

export const getModal = (modalProps: ModalProps) => {
  const Modal = Modals[modalProps.type];
  return <Modal {...modalProps} />;
};
