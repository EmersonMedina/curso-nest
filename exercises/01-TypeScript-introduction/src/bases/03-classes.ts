import axios from "axios"
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface"

export class Pokemon {
    public id: number
    public name: string

    constructor(id: number, name: string) { 
        this.id = id
        this.name = name
    }

    public sayHi() {
        console.log(`Hi! I'm ${this.name}`)
    }
}

//Forma corta, getters, metodos
export class Pokemon2 {

    //POR DEFECTO TODO ES PUBLIC

    private BASE_POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'

    get imageUrl(): string {
        return `${this.BASE_POKEMON_URL}/${this.id}`
    }

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    scream() { 
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`)
    }

    async getMoves() : Promise<Move[]>{ 
        const { data } = await axios.get<PokeapiResponse>(this.imageUrl)

        console.log(data.moves)

        return data.moves
    }
}


export const charmander = new Pokemon2(4, 'Charmander')

charmander.speak()
charmander.scream()
charmander.getMoves()