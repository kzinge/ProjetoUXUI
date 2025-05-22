import React from "react";
import "./Detalhamento.css";

export default function Detalhamento({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="detalhamento">
      <h1>{card.title}</h1>
      <img src={card.imageUrl} alt="" />
      <p>{card.detalhe}</p>
      <button onClick={onClose}>
        Fechar
      </button>
    </div>
  );
}
