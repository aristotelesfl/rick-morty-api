import { mount_card } from "../cards/script/character-card.js"

let currentPage = 1;

async function fetchCharacters(page) {
    try {
        const request = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const response = await request.json();
        return response.results;
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function viewCharacters(page){
    const characters = await fetchCharacters(page);
    characters.forEach((current_character)=>{
        const image = document.createElement('img')
        image.src = current_character.image

        const name = document.createElement('h2')
        name.textContent = current_character.name

        const species = document.createElement('p')
        species.textContent = current_character.species

        const status = document.createElement('p')
        status.textContent = current_character.status

        const origin = document.createElement('p')
        origin.textContent = current_character.origin.name

        mount_card(current_character.id, image, name, species, status, origin)
    })
}

document.getElementById('load-more').addEventListener('click', () => {
    currentPage++;
    viewCharacters(currentPage);
});

viewCharacters()