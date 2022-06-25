import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay text={props.text} onClose={props.onClose}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
