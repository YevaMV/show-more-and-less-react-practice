import { useState } from 'react';
import Card from './component/Card';
import './index.css';

function App(props) {
  const [showMore, setShowMore] = useState(true);
  const [cardIsShown, setCardIsShown] = useState(false);

  function showCardHandler() {
    setCardIsShown(true);
  }

  function hideCardHandler() {
    setCardIsShown(false);
  }

  const text =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  const max = 100;
  if (text.length <= max) {
    return <span>{text}</span>;
  }

  return (
    <section>
      {cardIsShown && <Card text={text} onClose={hideCardHandler} />}
      <div className="text_block">
        {showMore && `${text.substring(0, max)}...`}
      </div>
      <button onClick={showCardHandler}>More</button>
    </section>
  );
}

export default App;
