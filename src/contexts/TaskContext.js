import { createContext, useReducer } from "react";
import { tasksReducer } from "../reducers/TasksReducer";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    // Reducer and Dispatch
    // 1st param: the reducer imported from reducer folder
    // 2nd param: initial state value
    const [ tasks, dispatch ] = useReducer(tasksReducer, []);

    // We return 2 things:
    // tasks: the state of the Context, which is the global data that other components can use
    // dispatch: the function to interact with the Context data
    return(
        <TaskContext.Provider value={{tasks, dispatch}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;