import { carros } from "../dados_carro"; // importa lista de carros
import Carro from "./Carro"; // importa elemento carro
import "./Carros.css" // importa um css
export default function CarroFiltrado(){ // elemento carro filtrado
    const carros2019 = carros.filter(carro => (carro.ano > 2019)) //filtra carros da lista carros que tem ano maior que 2019 e guarda nesse objeto

    return( //retorno
        <div className="carrosfiltrados"> {/*civ carros filtrados */}
            {carros2019.map(carro =>( 
                <Carro key={carro.id} carro={carro}></Carro>
            ))} {/*mapeamento e moostrando carros */}
        </div>
    )
}