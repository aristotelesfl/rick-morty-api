const image = document.querySelector('#image-profile')
const name = document.querySelector('#name-profile')
const species = document.querySelector('#species-profile')
const status = document.querySelector('#status-profile')
const origin = document.querySelector('#origin-profile')
const modal = document.querySelector('#profile')
const close = document.querySelector('#close-profile')

export function displayCharacterInfo(image_profile, name_profile, species_profile, status_profile, origin_profile) {
    image.src = image_profile.src
    name.innerHTML = name_profile.innerHTML
    species.innerHTML = species_profile.innerHTML
    status.innerHTML = status_profile.innerHTML
    origin.innerHTML = origin_profile.innerHTML
    modal.showModal()
    close.onclick = function() {
        modal.close()
    }
}

