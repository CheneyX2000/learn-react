import { useState } from 'react';
import { sculptureList } from '../../data/data';

/**
 * 
 * @returns A component that displays a gallery of sculptures.
 */
export default function Gallery() {
  /**
   * The index of the sculpture to display.
   */
  const [index, setIndex] = useState(0);

  /**
   * Increments the index of the sculpture to display.
   * When the index is updated, the component re-renders.
   */
  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  /**
   * The JSX ecpression returns a button that, 
   * when clicked, increments the index of the sculpture to display.
   */
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}
