const renderShapeChoice = require("./shapes.js");

describe("renderShapeChoice", () => {
    //test for circle with inputs
    it("should take in user input to make a circle logo, with blue background, red text and ABC as the characters", () => {
        const shape = "Circle";
        const shapeColor = "blue";
        const textColor = "red";
        const characters = "ABC";
        const expectedOutput = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>
        </svg>
        `
        const result = renderShapeChoice(shape, shapeColor, textColor, characters);
        expect(result).toBe(expectedOutput);
    })
    //test for triangle with inputs
    it("should take in user input to make a triangle logo, with red background, blue text and ABC as the characters", () => {
        const shape = "Triangle";
        const shapeColor = "red";
        const textColor = "blue";
        const characters = "ABC";
        const expectedOutput = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 250,180 50,180" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text>
        </svg>
        `
        const result = renderShapeChoice(shape, shapeColor, textColor, characters);
        expect(result).toBe(expectedOutput);
    })
    //test for square with inputs
    it("should take in user input to make a square logo, with black background, white text, and ABC as the characters", () => {
        const shape = "Square";
        const shapeColor = "black";
        const textColor = "white";
        const characters = "ABC";
        const expectedOutput = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" fill="black" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>
        `
        const result = renderShapeChoice(shape, shapeColor, textColor, characters);
        expect(result).toBe(expectedOutput);
    })
})