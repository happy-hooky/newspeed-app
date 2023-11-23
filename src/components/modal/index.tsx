import PlatformModal from '@/components/modal/PlatformModal';

export const Modals = { platformModal: PlatformModal };

export interface ModalProps {
  hash: string;
  type: keyof typeof Modals;
  payload?: { [key: string]: any };
}

export const getModal = ({ hash, type, payload }: ModalProps) => {
  const Modal = Modals[type];
  return Modal({ hash, payload });
};
