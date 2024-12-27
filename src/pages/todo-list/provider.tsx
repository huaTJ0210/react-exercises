import { useReducer } from 'react';
import { TasksContext, TaskDispatchContext } from './context';
import { initialState, taskReducer } from './reducer';

type IProps = {
  children?: React.ReactNode;
};
const TaskProvider: React.FC<IProps> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TaskProvider;
