import { useState } from 'react';

/**
 * When a user clicks on “buy”, the pending counter is incremented by 1. 
 * After 2 seconds, the pending counter becomes 0 and the completed counter is incremented by 1. 
 * For some reason, the counters do not update correctly. Fix the bug in the code.
 */
export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending => pending + 1);
    await delay(3000);
    setPending(pending => pending - 1);
    setCompleted(completed => completed + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}