import { useState } from "react"
export default function Change(){
    let [valor, setValor] = useState(0)

    return(
        <div>
            <button onClick={() => setValor(valor + 1)}>{valor}Cliques</button>
        </div>
    )
}