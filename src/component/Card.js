import Modal from '../UI/Modal';

function Card(props) {
  return <Modal text={props.text} onClose={props.onClose} />;
}

export default Card;
