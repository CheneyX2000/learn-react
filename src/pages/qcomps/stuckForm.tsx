import { SetStateAction, useState } from "react";

/**
 * When the Form is rendered, it appears to be frozen. 
 * When a user enters stuff into the <input> tags or 
 * clicks on the reset button nothing happens. 
 * Identify and fix the error. 
 */

export default function Form() {
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  function handleFirstNameChange(e: { target: { value: SetStateAction<string>; }; }) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: { target: { value: SetStateAction<string>; }; }) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName(firstName => firstName = '');
    setLastName(lastName => lastName = '');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
