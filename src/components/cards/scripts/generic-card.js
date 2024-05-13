const locations = document.querySelector('#locations')


export function mount_card(id, name_of_object, type_or_air_date, dimension_or_episode) {
    const container = document.createElement('div')
    container.classList = 'generic-card'

    const name = document.createElement('h2')
    name.textcontent = name_of_object

    const sub_info = document.createElement('p')
    sub_info.textContent = type_or_air_date

    const final_info = document.createElement('p')
    final_info.textContent = dimension_or_episode

    container.appendChild(name)
    container.appendChild(sub_info)
    container.appendChild(final_info)
    container.id = `generic-card-${id}`

    locations.appendChild(container)
}