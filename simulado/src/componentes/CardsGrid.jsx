import React from "react";
import Card from "./Card";
import "./CardsGrid.css"

export default function CardsGrid() {
  const cards = [
    { imageUrl: "https://i.pinimg.com/736x/81/ec/02/81ec02c841e7aa13d0f099b5df02b25c.jpg", title: "Card 1" },
    { imageUrl: "https://i.pinimg.com/736x/12/49/51/1249511d06c783b0c29b7785c3fa970c.jpg", title: "Card 2" },
    { imageUrl: "https://i.pinimg.com/736x/02/66/a1/0266a10b4de19e2f1146e77fe2ed16ac.jpg", title: "Card 3" },
    { imageUrl: "https://i.pinimg.com/736x/f2/9d/cc/f29dcccf3a94fcc258f8b4f43b84bf62.jpg", title: "Card 4" },
    { imageUrl: "https://i.pinimg.com/736x/06/24/07/0624070f2fc25fdb8a2efd2aac7d54d9.jpg", title: "Card 5" },
  ];

  return (
    <div>
      <h1>TÍTULO</h1>
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} title={card.title} />
        ))}
      </div>
    </div>
  );
}

// flex justify-center gap-6 flex-wrap