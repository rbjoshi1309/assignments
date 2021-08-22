import React, { useState } from 'react';

function StateHook() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br/>
      <h1>This is using State Hook</h1>
    </div>
  );
}

export default StateHook