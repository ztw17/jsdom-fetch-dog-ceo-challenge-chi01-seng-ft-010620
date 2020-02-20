// DECLARED VARIABLES

const dogImageContainer = document.getElementById('dog-image-container')
const dogBreedContainer = document.getElementById("dog-breeds")

// FETCH AND FUNCTIONS

function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then( response => response.json() )
        .then( dogImage => renderImage(dogImage.message) )
};

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then( response => response.json() )
        .then( dogBreedData => renderDogBreed(dogBreedData.message) )
};

function renderImage(dogImage) {
    dogImage.forEach( dog => {
        const img = document.createElement('img')
        img.src = dog
        dogImageContainer.appendChild(img)
    })
};

function renderDogBreed(dogBreedData) {
    for (let dogBreed in dogBreedData) {
        const li = document.createElement('li')
        li.innerText = dogBreed
        dogBreedContainer.appendChild(li)
    }
}

function handleBreedClick() {
    if (event.target.tagName === "LI") {
        if (event.target.style.color === "green") {
            event.target.style.color = "blue"
        } else {
        event.target.style.color = "green"
        }
    }
}

// eventLISTENERS

dogBreedContainer.addEventListener('click', handleBreedClick)

// INVOKED FUNCTIONS

fetchDogs()
fetchBreeds()

// PRACTICE CODE

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(dogData){
//         renderImages(dogData)
// })

// fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then(response => response.json())
//     .then(dogImage => {
//         renderImages(dogData)