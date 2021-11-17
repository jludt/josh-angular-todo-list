import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer } from "@ngrx/store";
import { Todos } from "src/app/shared/models/todo";

interface TodoState extends EntityState<Todos> {}

export const todosAdapter = createEntityAdapter<Todos>({});

const initialState = todosAdapter.getInitialState();

export const todosReducer = createReducer(initialState);
