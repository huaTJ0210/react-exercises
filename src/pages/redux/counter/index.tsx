import React from 'react';

import { useAppDispatch, useAppSelector } from '../hook';
import { decrement, asyncAdd } from './counterSlice';

const Counter: React.FC = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      {value}
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(asyncAdd())}>异步+</button>
    </div>
  );
};
export default Counter;
