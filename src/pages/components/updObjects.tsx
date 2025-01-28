import { useState } from 'react';

/**
 * The Form component renders an image, 
 * a city input, and a paragraph with the person's name, artwork title, 
 * and city.
 */
export default function Form() {
  const [person, setPerson] = useState({
    name: 'Ranjani Shettar',
    artwork: {
      title: 'Aureole',
      city: 'Bangalore',
      image: 'https://i.imgur.com/okTpbHhm.jpg',
    }
  });

  /**
   * The handle function illustrates how to update nested objects in state.
   * Note the use of the spread operator to update by creating a copy the old object
   * and changing only the relevant parts.
   * @param e The event object
   */
  function handleCityChange(e: { target: { value: string; }; }) {
    const nextArtwork = { ...person.artwork, city: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);
  }


  return (
    <>
      <img src={person.artwork.image}/>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        {person.name}{' '}
        {person.artwork.title}{' '}
        ({person.artwork.city})
      </p>
    </>
  );
}
