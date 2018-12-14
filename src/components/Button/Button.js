import React from "react";
import LanguageContext from "../Context/LanguageContext";
import ColorContext from "../Context/ColorContext";

/* 
      MAKE USE OF CONSUMER WHENEVER YOU WANT TO GET INFORMATION FROM MULTIPLE DIFFERENT CONTEXT OBJECTS INSIDE OF A SINGLE COMPONENT.
      Whenever we use the Context API's consumer we  need to provide a fuction that will be passed the value inside of the context object. The function will automatically be invoked and in this case will set the value that we want based on our logic. The child of the consumer needs to be a function. */

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button
            className={`ui button ${color === "red" ? "red" : "primary"}`}
            type="button"
          >
            <LanguageContext.Consumer>
              {value => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
