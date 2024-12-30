import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="explore">
      <h2>Explore</h2>
      <div className="card-container">
        <div className="card">
          <h3>Data Structure and Algorithms</h3>
          <button className="view-more">View more →</button>
        </div>
        <div className="card">
          <h3>Practice DSA</h3>
          <button className="view-more">View more →</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
