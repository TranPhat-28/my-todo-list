import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SwitchTheme = () => {

    const {toggleTheme} = useContext(ThemeContext);

    return(
        <button className="btn btn-outline-primary" onClick={toggleTheme}>
            Switch Theme
        </button>
    )
}

export default SwitchTheme;