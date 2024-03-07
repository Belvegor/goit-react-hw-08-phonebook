import { useState } from 'react';
import ReactDOM from 'react-dom';
import ContactFormUpdate from '../Form/ContactFormUpdate';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      {showModal &&
        ReactDOM.createPortal(
          <ContactFormUpdate openModal={openModal} closeModal={closeModal} />,
          document.getElementById('portal')
        )}
    </div>
  );
};

export default Modal;