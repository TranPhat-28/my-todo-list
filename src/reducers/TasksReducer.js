import { v4 as uuid } from 'uuid';

// Take 2 arguments:
// 1st: action
// 2nd: state
export const tasksReducer = (state, action) => {
    // Check action type
    switch (action.type) {
        case 'ADD_TASK':
            // Add a new task to state
            return [...state, {
                title: action.task.title,
                content: action.task.content,
                id: uuid()
            }]
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
}