import React, { Component } from "react";
import LanguageContext from "../Context/LanguageContext";
class Field extends Component {
  // Create the context type then use this.context to get access to the context object
  // static creates a property on the Button class
  // alternative syntax could be
  // Field.contextType = LanguageContext
  // the value needs to be contextType to make the contextvalue work.
  // the value needs to be references as this.context
  static contextType = LanguageContext;
  render() {
    // used to change the value of the label based on the context value
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
