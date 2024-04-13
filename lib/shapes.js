
//function that returns the shape selected from prompt in index.js
function renderShapeChoice(shape, shapeColor, textColor, characters){
    if(shape === "Circle"){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>
        `
    } else if (shape === "Triangle"){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 250,180 50,180" fill="${shapeColor}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>
        `
    } else if (shape === "Square"){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${characters}</text>
        </svg>
        `
}};

module.exports =  renderShapeChoice;