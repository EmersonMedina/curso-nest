import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter} from '../api/pokeapi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const { moves } = await this.http.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${ this.id }`);
        return moves;
    }

}

const pokeApiAxiosAdapter = new PokeApiAdapter();
const pokeApiFetchAdapter = new PokeApiFetchAdapter();

export const charmander = new Pokemon( 4, 'Charmander', pokeApiFetchAdapter ); 

charmander.getMoves();