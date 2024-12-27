import { ITask, IAction } from './type.ts';
export const initialState = [];

export enum TaskAction {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
  DONE = 'DONE'
}

export function taskReducer(
  state: Array<ITask>,
  action: IAction
): Array<ITask> {
  const { type, payload } = action;
  switch (type) {
    case TaskAction.ADD:
      return [
        ...state,
        {
          id: state.length,
          content: payload.content!,
          isDone: false
        }
      ];
    case TaskAction.DELETE:
      return state.filter((task) => task.id !== payload.id);
    case TaskAction.UPDATE:
      return state.map((task) => {
        if (task.id === payload.id) {
          return { ...task, content: payload.content! };
        }
        return task;
      });
    case TaskAction.DONE:
      return state.map((task) => {
        if (task.id === payload.id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    default:
      return state;
  }
}
