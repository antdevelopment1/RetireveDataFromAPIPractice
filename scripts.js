// const dataTrigger = document.querySelector('[data-trigger]');
// const dataOutput = document.querySelector('[data-output]');

// const dataClick = document.querySelector('[data-click]');
// const dataContainer = document.querySelector('[data-container]');


const puppyButton = document.querySelector('[data-clickPuppyButton]');
const puppyContainer = document.querySelector('[data-containerForPuppy]');
// function getJoke() {

//     fetch('https://api.icndb.com/jokes/random')
//     .then( r => r.json() )
//     .then( j => j.value.joke )
//     .then(writeToScreen)

// }

// function writeToScreen(content) {
//     const joke = document.createElement("li");
//     joke.textContent = content;
//     dataOutput.appendChild(joke);
// }

// function button() {
//     dataTrigger.addEventListener('click', getJoke)
// }
// button();


// function getCharacter() {
//     fetch("https://anapioficeandfire.com/api/characters")
//         .then(response => response.json())
//         .then(data => data[0].gender)
//         .then(writeCharacterToScreen);
// }

// function writeCharacterToScreen(content) {
//     const character = document.createElement('li');
//     character.textContent = content;
//     dataContainer.appendChild(character)
// }

// function anotherButton() {
//     dataClick.addEventListener('click', getCharacter)
// }
// anotherButton();

// Question answer pick


// fetch some information from the API
// convert it to JSON
// draw the data to the screen

function getPuppy() {
    fetch('http://my-little-cors-proxy.herokuapp.com/https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => data.message)
        .then(puppyImage)  
}

function puppyImage(image) {
    console.log(image);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', image)
    puppyContainer.append(newImage);
}

function clickButton() {
    puppyButton.addEventListener('click', getPuppy)
}
clickButton();