import React from 'react';
import Modal from 'react-modal';
interface Props {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  children: React.ReactNode;
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
const TicketModal = ({ openModal, closeModal, isOpen, children }: Props) => {
  let subtitle: any;
  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default TicketModal;
