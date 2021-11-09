// export interface Todo {
//   [key: string]: string | number | boolean;
// }

export interface Todo {
  id: number;
  name: string;
  description: string;
  [key: string]: string | number | boolean;
}

export type Todos = Todo[];
