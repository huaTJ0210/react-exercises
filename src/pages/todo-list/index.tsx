import List from './list';
import Add from './add';

import TaskProvider from './provider';

const ToDoList = () => {
  return (
    <div>
      <TaskProvider>
        <Add></Add>
        <List></List>
      </TaskProvider>
    </div>
  );
};

export default ToDoList;
