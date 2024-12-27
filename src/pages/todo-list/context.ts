import { createContext } from 'react';
import { ITask, IAction } from './type';

export const TasksContext = createContext<ITask[]>([]);
export const TaskDispatchContext = createContext<(action: IAction) => void>(
  () => {}
);
