# Context API Reference

https://haeke.github.io/Context-example

- The purpose of this project is to have an example of how to use React's context API.

- This project consists of an Input, button and Two Icons that can be used to switch between languages. When you click on the American flag icon or the Dutch flag icon the button color and language text will change.
- The project uses three components, App -> UserCreate -> Field -> Button. Since the UserCreate component does not care about the name and color values, context is used to pass the values to Field and Button without the need for passing the color and name values to UserCreate.

- The App component uses two context objects to set the color and change the text displayed in the label and the button.

- The Button component uses the Consumer to get the color value and language name.
- Github Pages setup -`npm i gh-pages --save-dev`
- In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:


    "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }

- Modify Package.json to include -`"homepage": "https://haeke.github.io/Context-example"`
- Run command - - `npm run deploy`
