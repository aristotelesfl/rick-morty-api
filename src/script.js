import { mount_card } from "./cards/script/character-card.js"

const name = document.createElement('p')
const species = document.createElement('p')
const status = document.createElement('p')
const origin = document.createElement('p')

const data = []

async function viewCharacters(){
    try {
        const request = await fetch("https://rickandmortyapi.com/api/character")
        const response = await request.json()
        console.log(response)
        data.push(response.results)
        console.log(data)
        data.forEach((current_character)=>{
            name.textContent = current_character.name
            species.textContent = current_character.species
            status.textContent = current_character.status
            origin.textContent = current_character.origin
            mount_card(current_character.id, name, species, status, origin)
        })
    } catch(error) {
        console.log(error)
    }
}

viewCharacters()