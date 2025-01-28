import { useState } from 'react';

/**
 * A component that illustrates how to use an object 
 * to store state.
 */
export default function PersonData() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [age, setAge] = useState(0);
    /**
     * An object to store the person's data in the component's state.
     */
    const [person, setPerson] = useState({fullName: '', age: 0})

    /**
     * A function that handles the button click event and
     * updates the person's data in the component's state.
     * Note how the new object is created and passed to the
     * setPerson function.
     */
    function handleClick() {
        let name = fName + ' ' + lName;
        setPerson({fullName: name, age: age});
    }

    return(
       <>
            <textarea value={fName} onChange={e => setFName(e.target.value)} />
            <textarea value={lName} onChange={e => setLName(e.target.value)} />
            <textarea value={age} onChange={e => setAge(Number(e.target.value))} />
            <button onClick={handleClick}> Save </button>
            {person.fullName && <p> Person: {person.fullName} is {person.age} years old </p>}
       </>
    )
}