import React from "react";
import { Card } from "@mui/material";

//Lets make reusable cards, whenever I will be using this card i will call this component with two arguments
const reusableCard = ({ title, description }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

//Lets make a cardlist with this reusable components

const CardList = () => {
  const cardData = [
    {
      title: "Card 1",
      description: "description 1",
    },
    {
      title: "Card2",
      description: "description 2",
    },
    {
      title: "Card 3",
      description: "description 3",
    },
  ];
  return (
    <div class="cardlist">
      {cardData.map((card, index) => (
        <reusableCard
          key={index}
          title={card.title}
          decription={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
