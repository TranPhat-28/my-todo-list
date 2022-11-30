import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { ThemeContext } from "../contexts/ThemeContext";

const TaskList = () => {

    const {tasks, dispatch} = useContext(TaskContext);
    const {isLightTheme} = useContext(ThemeContext);

    const deleteTask = (id) => {
        dispatch({type: "REMOVE_TASK", id: id})
    }

    return(
        <div className="container">
            {tasks.length ? (<h3>You have {tasks.length} task(s) to finish</h3>) : (<h3>No task left! Congrat</h3>)}

            {tasks.map(item => (
                <li className={ isLightTheme? "list-group-item item-light p-3 mt-2 rounded" : "list-group-item item-dark p-3 mt-2 rounded"} key={item.id} onClick={() => {deleteTask(item.id)}}>
                    <h4> {item.title} </h4>
                    <p> {item.content} </p>
                </li>
            ))}
        </div>
    );
}

export default TaskList;