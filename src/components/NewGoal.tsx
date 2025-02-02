import { FormEvent } from 'react';

export default function NewGoal() {
  function handleSumbit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSumbit}>
      <p>
        <label htmlFor="goal">You Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="sumary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
