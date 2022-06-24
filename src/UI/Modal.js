import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <h3>Description</h3>
      <div className={classes.content}>{props.text}</div>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
  );
}

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
