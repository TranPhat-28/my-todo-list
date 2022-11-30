import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import TaskContextProvider from "./contexts/TaskContext";

function App() {

  const {isLightTheme} = useContext(ThemeContext);

  return (
    <div className="App" style={{backgroundColor: isLightTheme ? "white" : "#424242", color: isLightTheme ? "black" : "white"}}>
        <BrowserRouter>
          <TaskContextProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/add" element={<Add />} />
            </Routes>
          </TaskContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
