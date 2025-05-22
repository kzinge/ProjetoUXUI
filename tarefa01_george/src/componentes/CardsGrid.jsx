import React, { useState } from "react";
import Card from "./Card";
import Detalhamento from "./Detalhamento";
import "./CardsGrid.css";

export default function CardsGrid() {
  const cards = [
    {
      id: 1,
      imageUrl: "./joel.png",
      title: "Joel Miller",
      detalhe: "Protagonista de The Last of Us, Joel é um sobrevivente marcado por perdas e pela luta em um mundo pós-apocalíptico."
    },
    {
      id: 2,
      imageUrl: "./capitaoamerica.png",
      title: "Capitão América",
      detalhe: "Steve Rogers, o Capitão América, é um super-soldado símbolo de coragem, lealdade e justiça no universo Marvel."
    },
    {
      id: 3,
      imageUrl: "./goku.png",
      title: "Son Goku",
      detalhe: "Protagonista de Dragon Ball, Goku é um Saiyajin com coração puro e um dos guerreiros mais poderosos do universo."
    },
    {
      id: 4,
      imageUrl: "./peppa.png",
      title: "Peppa Pig",
      detalhe: "Peppa é uma porquinha animada e curiosa que vive aventuras com sua família e amigos no popular desenho infantil."
    },
    {
      id: 5,
      imageUrl: "./scooby.png",
      title: "Scooby Doo",
      detalhe: "Scooby Doo é um cão medroso e divertido que resolve mistérios ao lado da turma da Máquina do Mistério."
    },
    {
      id: 6,
      imageUrl: "./dumbledore.png",
      title: "Albus Dumbledore",
      detalhe: "Diretor de Hogwarts na saga Harry Potter, Dumbledore é um sábio bruxo conhecido por sua inteligência e bondade."
    },
  ];
  

  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const cardSelecionado = cards.find(card => card.id === imagemSelecionada);

  return (
    <div className="flex flex-col items-center">
      <div className="cards flex justify-center gap-6 flex-wrap">
        {cards.map((card) => (
          <div key={card.id} onClick={() => setImagemSelecionada(card.id)} className="cursor-pointer">
            <Card imageUrl={card.imageUrl} title={card.title} />
          </div>
        ))}
      </div>
      <Detalhamento card={cardSelecionado} onClose={() => setImagemSelecionada(null)} />
    </div>
  );
}
