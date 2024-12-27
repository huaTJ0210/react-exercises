import { useState } from 'react';
import { ITask } from './type';
import { useTaskDispatch } from './hooks';
import { TaskAction } from './reducer';

interface IProps {
  task: ITask;
}

const Item: React.FC<IProps> = ({ task }) => {
  const [isEdit, setEdit] = useState(false);
  const [content, setContent] = useState(task.content);
  const dispatch = useTaskDispatch();
  const handleChange = (e: React.SyntheticEvent) => {
    setContent((e.target as HTMLInputElement).value);
  };
  const handleEdit = () => {
    if (isEdit) {
      // 如果是编辑则需要执行保存逻辑
      dispatch({
        type: TaskAction.UPDATE,
        payload: { id: task.id, content }
      });
    }
    setEdit(!isEdit);
  };
  const handleDelete = () => {
    // 删除逻辑
    dispatch({ type: TaskAction.DELETE, payload: { id: task.id } });
  };
  const handleFinish = () => {
    // 完成逻辑
    dispatch({ type: TaskAction.DONE, payload: { id: task.id } });
  };
  return (
    <div>
      {isEdit ? (
        <input value={content} onChange={handleChange}></input>
      ) : (
        <span>{task.content}</span>
      )}
      {!task.isDone && (
        <>
          <button onClick={handleEdit}>{isEdit ? '保存' : '编辑'}</button>
          <button onClick={handleDelete}>删除</button>
          <button onClick={handleFinish}>完成</button>
        </>
      )}
    </div>
  );
};

export default Item;
