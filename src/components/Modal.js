import React, { useState, useEffect } from 'react';

const Modal = (props) => {
  const [container, setcontainer] = useState();
  useEffect(() => {
    const container = document.createElement('div');
    setcontainer(container);
    document.appendChild(container);
  }, []);
  return React.createPortal(
    <div
      style={{ postion: 'fixed', height: '100%', width: '100%', zindex: 1000 }}
      onClick={props.close}
    >
      <div onClick={(e) => e.stopPropagation()}>{props.children}</div>
    </div>,
    container
  );
};

export default Modal;
