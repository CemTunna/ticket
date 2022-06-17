import React from 'react';
import ReactDOM from 'react-dom';
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
  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }
  // function closeModal() {
  //   setIsOpen(false);
  // }

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
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      {children}
    </Modal>
  );
};

export default TicketModal;
