import { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
    state = {
        isLightTheme: true
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }

    render(){
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>    
        );
    }
}

export default ThemeContextProvider;