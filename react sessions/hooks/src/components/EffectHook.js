import React, { useState, useEffect } from 'react';

function EffectHook() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br/>
      <h1>This is using Effect Hook</h1>
    </div>
  );
}

export default EffectHook