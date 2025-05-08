function Mudanca(){
    function mudaCor(){
        let sessao = document.getElementById('sessao');
        sessao.style.background = "purple";
        
        let div = document.createElement("div");
        div.textContent = "SURPRISE";

        sessao.appendChild(div);

    }
    return(
        <div>
            <button onClick={mudaCor} className="muda">
                Clique aqui e tenha uma surpresa
            </button>
        </div>
    ) 
}

export default Mudanca