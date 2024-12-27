import { useContext } from 'react';
import { TasksContext, TaskDispatchContext } from './context';

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useTaskDispatch = () => {
  return useContext(TaskDispatchContext);
};
