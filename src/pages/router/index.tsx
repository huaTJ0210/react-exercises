import React from 'react';
import { useNavigate } from 'react-router-dom';
const Index: React.FC = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav('/router/page');
  };
  return (
    <div>
      <h1>Hello Router</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Index;
