import React from "react";
import "./Category.css";
import Football from "../../assets/Football.png";
import Basket from "../../assets/Basket.png";
import Table from "../../assets/TAble.png";
import Car from "../../assets/CarSports.png";

function Category() {
  const Game = [
    { id: 1, name: "FOOTBALL", PIC: < Football/ > },
    { id: 2, name: " BASKET BALL", PIC: { Basket } },
    { id: 3, name: "TABLE TENNIS", PIC: { Table } },
    { id: 3, name: "CAR SPORTS", PIC: { Car } },
  ];

  return (
    <>
      <div className="Category" id="Category">
        Category
      </div>

      {Game.map((item, indx) => (
        <div className="GameBox">
        <div className="Games" key={indx}>
          <div className="GameName">{item.name}</div>
          <div className="img">
            <img src={item.PIC} alt="" />
          </div>
        </div></div>
      ))}
    </>
  );
}

export default Category;
