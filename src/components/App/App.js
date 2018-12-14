import React, { Component } from "react";
import UserCreate from "../UserCreate/UserCreate";
import LanguageContext from "../Context/LanguageContext";
import ColorContext from "../Context/ColorContext";

// We define a context object to pass props to the Button and Field component.
// Since the UserCreate component does not need access to the object inside of context
// We are going to use the context API.

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      color: ""
    };
  }

  onLanguageChange = name => {
    this.setState({
      name: name
    });
    this.changeColor();
  };
  // To be used by the Color Consumer to change the value of the color property sent to the Button component.
  changeColor = () => {
    this.setState(prevState => ({
      color: prevState.color === "red" ? "primary" : "red"
    }));
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            onClick={() => this.onLanguageChange("english")}
            className="flag us"
          />
          <i
            onClick={() => this.onLanguageChange("dutch")}
            className="flag nl"
          />
        </div>
        {/* The provider is used to change the value that is inside of the context object. */}
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.name}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
