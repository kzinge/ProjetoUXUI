export default function Carro({carro}){ //elemento carro, tem um parametro "carro" que será passado na lista de carrros
    return(
        <div className="carro"> {/*div carro*/}
            <h1>Modelo: {carro.modelo}</h1> {/*modelo*/}
            <h3>Cor: {carro.cor}</h3> {/*cor*/}
        </div>
    )
}