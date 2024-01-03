import {createSlice, nanoid} from "@reduxjs/toolkit";
import filterOptions from "../../constants/filterOptions";

export const todosSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [
            {
                id: '1',
                title: 'Learn React',
                completed: true
            },
            {
                id: '2',
                title: 'Read a book',
                completed: false
            },
        ],
        category: filterOptions.ALL,
    },
    reducers: {
        addTodo: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({title}) => {
                return {
                    payload: {
                        completed: false,
                        id: nanoid(),
                        title
                    }
                }
            }
        },
        removeTodo: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        toggle: (state, action) => {
            const item = state.items.find(item => item.id === action.payload)
            item.completed = !item.completed
        },
        changeFilterCategory: (state, action) => {
            state.category = action.payload
        },
        clearCompleted: (state) => {
            state.items = state.items.filter(item => item.completed === false)
        }
    },
})

export const callTodos = (state) => state.todos.items
export const callCategory = (state) => state.todos.category
export const callFilteredTodos = (state) => {
    if (state.todos.category === filterOptions.ALL) {
        return state.todos.items
    }
    return state.todos.items.filter(
        item => state.todos.category === filterOptions.ACTIVE ?
            item.completed === false :
            item.completed === true
    )
}
export const {addTodo, removeTodo, toggle, changeFilterCategory, clearCompleted} = todosSlice.actions
export default todosSlice.reducer
