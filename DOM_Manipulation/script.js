console.log('All is well in the Script file!');

// This function will change the value of Pikachu to it's evolved form Raichu


//  https://archives.bulbagarden.net/media/upload/3/3a/026Raichu-Alola.png


function evolvePokemon(elementId) {
    console.log(document.querySelector('#pokemonPic').src)

    if (document.querySelector(elementId).innerText == 'Raichu') {
        document.querySelector(elementId).innerText = 'Pikachu'
        document.querySelector('#pokemonPic').src = 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/600px-025Pikachu.png'

    } else {
        document.querySelector('#pokemonPic').src = 'https://archives.bulbagarden.net/media/upload/3/3a/026Raichu-Alola.png'
        document.querySelector(elementId).innerText = 'Raichu'
    }
}

function changeText(element) {
    console.log(element)

    element.innerText = 'New Text!'

}

function addH1() {

    var target = document.querySelector('body')
    target.innerHTML += "<h1 class='text-pink'>A wild H1 appears!</h1>"

}