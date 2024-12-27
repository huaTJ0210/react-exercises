import React from 'react';
import { useImmer } from 'use-immer';

interface IProps {
  count: number;
  onClick: () => void;
}

const Child: React.FC<IProps> = (props) => {
  const [person, setPerson] = useImmer({ name: 'li', age: 20 });
  const [list, setList] = useImmer([1, 2, 3, 4, 5]);
  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setPerson((draft) => {
      draft.name = 'wang';
    });
    setList((draft) => {
      draft.push(6);
    });
  };
  return (
    <div onClick={props.onClick}>
      <div>child: {props.count}</div>
      <div onClick={handleClick}>{person.name}</div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Child;
