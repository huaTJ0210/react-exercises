import React, { memo } from 'react';

interface Props {
  add: () => void;
}

const Index: React.FC<Props> = ({ add }) => {
  console.log('child render ');
  return <div onClick={add}>child</div>;
};

export default memo(Index);
