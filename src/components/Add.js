import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Add = () => {

    const {dispatch} = useContext(TaskContext);

    const handleAdd = (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        dispatch({ type: 'ADD_TASK', task: {title, content}});

        document.getElementById("title").value='';
        document.getElementById("content").value='';
    }

    return(
        <div className="container d-flex justify-content-center">
            <form className="p-5" onSubmit={handleAdd}>
                <h2 className="text-center">Add a new task</h2>

                <label forhtml="title" className="form-label">Title</label>
                <input id="title" type="text" name="title" className="form-control mb-3" required></input>

                <label forhtml="content" className="form-label">Content</label>
                <input id="content" type="text" name="content" className="form-control mb-3" required></input>

                <input type="submit" className="btn btn-primary" value="Add task"></input>
            </form>
        </div>
    );
}

export default Add;