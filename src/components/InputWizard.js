import React, { useEffect, useState } from 'react';
import Modal from './Modal';
const InputWizard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {' '}
          {(closeModal) => (
            <div>
              <input />
              <button onClick={closeModal}>Submit</button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default InputWizard;

// Have a default Object
// Controls can be change via prompt
