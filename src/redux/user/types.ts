export type TodoId = string;

export type Todo = {
  id: TodoId;
  title: string;
  completed: boolean;
};

export type User = {
  email: string;
  id: string;
};

export type UserState = {
  user: User | null;
  loading: boolean;
  error: string;
};
