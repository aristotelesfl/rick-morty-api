const main = document.querySelector('#main')

const container = document.createElement('div')
container.classList = 'character-card'
const info_container = document.createElement('div')
info_container.classList = 'information'
const name = document.createElement('h2')
name.textcontent = 'Nome: '
const species = document.createElement('p')
species.textContent = "Especie: "
const status = document.createElement('p')
status.textContent = "Status: "
const origin = document.createElement('p')
origin.textContent = "Origem: "

export function mount_card(id, character_image, character_name, character_species, character_status, character_origin) {
    const image = character_image
    name.appendChild(character_name)
    info_container.appendChild(name)

    species.appendChild(character_species)
    info_container.appendChild(species)

    status.appendChild(character_status)
    info_container.appendChild(status)

    origin.appendChild(character_origin)
    info_container.appendChild(origin)

    container.appendChild(image)
    container.appendChild(info_container)
    container.id(`character-card-id-${id}`)

    main.appendChild(container)
}