import Carro from "./Carro"; //importa elemento carro
import { carros } from "../dados_carro"; //importa lista de carros
import "./Carros.css" //importa css

export default function Carros(){ //elemento carros
    return(
        <div className="listadecarros">
            {carros.map(carro => (
                <Carro key={carro.id} carro={carro}></Carro>
            ))}

            {/*usei aqui o mapemento para mapear todos os carros do array e passei para o elemento carro. */}
        </div>
    )
}