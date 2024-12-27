export interface ITask {
  id: number;
  content: string;
  isDone: boolean;
}

export interface IAction {
  type: string;
  payload: Partial<ITask>;
}
