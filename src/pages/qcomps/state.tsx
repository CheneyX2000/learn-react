import { useState } from 'react';
import { sculptureList } from '../../data/data';

/**
 * The Gallery component displays a sculpture from the sculptureList array.
 * The component has a bug that causes the component to crash with a runtime error.
 * Identify the reason and fix the bug.
 */
export default function Gallery() {
  /**
   * The index state variable keeps track of the current sculpture to display.
   */
  const [index, setIndex] = useState(0);
  /**
   * The showMore state variable determines whether to show the sculpture description.
   */
  const [showMore, setShowMore] = useState(false);

  /**
   * The handleNextClick function increments the index state variable to display the next sculpture.
   */
  function handleNextClick() {
    setIndex(index + 1);
  }

  /**
   * The handleMoreClick function toggles the showMore state variable to show or hide the sculpture description.
   */
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  /**
   * The JSX expression returns a button to display the next sculpture, 
   * the sculpture name and artist, 
   * the sculpture description, and the sculpture image.
   */
  return (
    <>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}