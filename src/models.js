export class Episodio {
    constructor(title, season, date_release){
        this.title = title
        this.season = season
        this.date_release = date_release
    }
}

export class Personagem {
    constructor(image, name, species, status, origin){
        this.image = image
        this.name = name
        this.species = species
        this.status = status
        this.origin = origin
    }
}

export class Localizacoes {
    constructor(name, type, dimension){
        this.name = name
        this.type = type
        this.dimension = dimension
    }
}