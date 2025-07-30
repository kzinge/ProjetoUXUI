import { useEffect, useState } from "react"; //importação do useEffect e useState do React
import "./Login.css"

export default function Login() { //Criação do componente Login
  const [email, setEmail] = useState(""); // Criação do estado email
  const [senha, setSenha] = useState(""); // Criação do estado senha

  const handleEmail = (e) => setEmail(e.target.value); // Criação da função para lidar com a mudança do email
  const handleSenha = (e) => setSenha(e.target.value); // Criação da função para lidar com a mudança da senha

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setSenha("");
  }; // Função para lidar com o envio do formulário

  useEffect(() => {
    if (senha == "AlunoPIU"){
        document.body.style.backgroundColor = "green";
        document.body.style.transition = "background-color 1s ease"; // Muda a cor de fundo para verde se a senha for "AlunoPIU"
    }

    if (senha != "AlunoPIU"){
        document.body.style.backgroundColor = "black";
        document.body.style.transition = "background-color 1s ease";
    }
  }, [senha]); //Verificação se a senha é "AlunoPIU" e muda a cor de fundo para verde

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email
            <input type="text" id="email" name="email" onChange={handleEmail} value={email} placeholder="Digite seu email"/>
            </label>
        </div>

        <div>
            <label htmlFor="senha">
                Palavra-passe
                <input type="text" id="senha" name="senha" onChange={handleSenha} value={senha} placeholder="Digite a Palavra-Passe"/>
            </label>
        </div>

        <input type="submit" value="Limpar" />
      </form>
    </div>

  );
}