const characters = document.querySelector('#characters')


export function mount_card(id, character_image, character_name, character_species, character_status, character_origin) {
    const container = document.createElement('div')
    container.classList = 'character-card'
    const info_container = document.createElement('div')
    info_container.classList = 'information'

    const name = document.createElement('h2')
    name.textcontent = 'Nome: '

    const species = document.createElement('p')
    species.classList = 'title'
    species.textContent = "Especie: "

    const status = document.createElement('p')
    status.classList = 'title'
    status.textContent = "Status: "

    const origin = document.createElement('p')
    origin.classList = 'title'
    origin.textContent = "Origem: "

    name.appendChild(character_name)
    info_container.appendChild(name)

    species.appendChild(character_species)
    info_container.appendChild(species)

    status.appendChild(character_status)
    info_container.appendChild(status)

    origin.appendChild(character_origin)
    info_container.appendChild(origin)

    container.appendChild(character_image)
    container.appendChild(info_container)
    container.id =`character-card-${id}`

    characters.appendChild(container)
}