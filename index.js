const inquirer = require("inquirer");
const fs = require("fs");
const renderShapeChoice = require("./lib/shapes.js");
inquirer
  //prompts for all relevant user information
  .prompt([
    {
      type: "input",
      name: "characters",
      message: "Enter up to 3 characters for your logo.",
      validate: (input) => {
        if (!input) {
          return "Cannot be empty!";
        }
        if (input.length > 3) {
          return "Cannot be greater than 3";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter your text color choice (Hexadecimal or color keyword).",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose the shape of your logo.",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter your shape color choice (Hexadecimal or color keyword).",
      validate: (input) => !!input || "Cannot be empty",
    },
  ])
  .then((data) => {
    // Destructuring the user input data
    const { characters, textColor, shape, shapeColor } = data;
    // Calling the function with user input
    const svgInfo = renderShapeChoice(shape, shapeColor, textColor, characters);

    fs.writeFile("./examples/logo.svg", svgInfo, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Generated SVG Logo!");
      }
    });
  });
