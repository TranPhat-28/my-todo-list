import TaskList from "./TaskList";

const Home = () => {
    return(
        <div className="container d-flex justify-content-center">
            <div className="container p-5">
                <h2 className="text-center">Your list of tasks</h2>

                <TaskList />
            </div>
        </div>
    );
}

export default Home;