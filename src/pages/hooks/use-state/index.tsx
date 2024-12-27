import React, { useState } from 'react';

export const Index: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((c) => (c += 1));
        }}
      >
        +
      </button>
    </div>
  );
};
