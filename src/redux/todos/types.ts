export type TodoId = string;

export type Todo = {
  id: TodoId;
  title: string;
  completed: boolean;
};

export type TodosState = {
  list: Todo[];
  loading: boolean;
  error: string;
};
