import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {

    const { isLightTheme } = useContext(ThemeContext);

    return (
        <nav className={isLightTheme ? "navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-dark bg-dark"}>
            <div className="container">
                <a className="navbar-brand" href="#">TodoApp</a>
                <ul className="navbar-nav me-auto flex-row">
                    <li className="nav-item ms-3">
                        <Link className="nav-link" to='/home'>Home</Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link className="nav-link" to='/add'>Add</Link>
                    </li>
                </ul>
                
                <SwitchTheme />    
            </div>
        </nav>
    )
}

export default Navbar;