import { useState } from "react"; 
// importação do useState para guardar o valor dos clicks

export default function Click(){ //função clique
    const [count, setCount] = useState(0) //guardando o valor do clique

    if (count > 10) { // se a conta de cliques for maior que 10
        document.body.getElementsByClassName("mais")[0].style.width = "5rem"; //aumenta a largura do botao mais
        document.body.getElementsByClassName("mais")[0].style.height = "5rem"; //aumenta a altura do bota mais
    };

    if (count < 0){ // se a conta de cliques for menor que 0
        document.body.getElementsByClassName("menos")[0].style.width = "0.5rem" // dimuniu a largura do botao menos
        document.body.getElementsByClassName("menos")[0].style.fontSize = "2px" // e diminui a fonte do botao menos
    }

    return( //retorno da função
        <div className="botoes"> {/*Div dos botões*/}
        <button onClick={() => setCount((count) => count - 1)} className="menos">-</button> {/*Botao com Função para incrementar clique*/}
        <h2>{count}</h2> {/*quantidade de Cliques*/}
        <button onClick={() => setCount((count) => count + 1)} className="mais">+</button> {/*Botao com Função para diminuir clique*/}
        </div>
    )
}