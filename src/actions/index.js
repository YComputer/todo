import {v4} from 'node-uuid';
import * as api from '../api';

export const receiveTodos = (filter, respone) => ({
   type: 'RECEIVE_TODOS',
    filter,
    respone
});

export const fetchTodos = (filter) =>
    api.fetchTodos(filter).then(response =>
        receiveTodos(filter,response)
    );

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
});