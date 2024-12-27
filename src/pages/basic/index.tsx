import './index.css';
import { useState } from 'react';
import Child from './child';

const Basic: React.FC = () => {
  const [count, setCount] = useState(0);
  const name = 'Basic';
  const handleClick = () => {
    setCount(count + 1);
    console.log('handleClick');
  };
  return (
    <div className="font-14">
      <div> {name}</div>
      <Child count={count} onClick={handleClick}></Child>
    </div>
  );
};

export default Basic;
