import sumir from "./function"

export default function NavBar({children}){
    return(
        <nav>
            <h1>Bem Vindos</h1>
            <button onClick={sumir}>menu</button>
            {children}
        </nav>
    )
}