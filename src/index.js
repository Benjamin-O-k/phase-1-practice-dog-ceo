console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
document.addEventListener('DOMContentLoaded',() => fetchImages())
function fetchImages(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(url => {
            let div = document.querySelector('#dog-breeds')
            let list = document.createElement('li')
            const img = document.createElement('img')
            img.src = url
            div.appendChild(list)
            list.appendChild(img)
        })
    })
    fetchDogBreeds()
    changeListColor()
    filterBreed()
}

function fetchDogBreeds(){
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(message =>{
            const list = document.querySelector('#dog-breed')
            const dogBreed = document.createElement('li')
            dogBreed.textContent = message
            list.appendChild(dogBreed)
        })
    })
}

function changeListColor(){
    let lists = document.querySelector('li')
    lists.forEach(li => {
        li.addEventListener('click', (e) => {
            let val = e.target.value
            val.style.color = 'green'
        })
    })
}
function filterBreed (){
    addEventListener('submit',() => {
        let breed = document.querySelector('#select-breed').value
        let url = `https://dog.ceo/api/breed/${breed}/images/random/4`
        fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data)})
    })
}
