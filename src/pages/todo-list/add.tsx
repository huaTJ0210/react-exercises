import React, { useState } from 'react';
import { useTaskDispatch } from './hooks';
import { TaskAction } from './reducer';

const Add: React.FC = () => {
  const [content, setContent] = useState('');
  const dispatch = useTaskDispatch();
  const handleChange = (e: React.SyntheticEvent) => {
    // 添加逻辑
    setContent((e.target as HTMLInputElement).value);
  };

  const handleAdd = () => {
    dispatch({
      type: TaskAction.ADD,
      payload: {
        content
      }
    });
    setContent('');
  };
  return (
    <div>
      <input
        placeholder="请输入任务名称"
        value={content}
        onChange={handleChange}
      ></input>
      <button onClick={handleAdd}>添加</button>
    </div>
  );
};

export default Add;
