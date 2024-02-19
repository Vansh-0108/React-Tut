import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // property : function (state, action)
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            // state.todos = state.todos.forEach((todo) => (todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo))
            state.todos = state.todos.map((todo) => (todo.id !== action.payload ? todo : action.payload))
        }
    },
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;