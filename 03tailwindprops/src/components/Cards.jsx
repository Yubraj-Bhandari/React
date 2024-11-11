// src/components/Card.js
import React from 'react';

function Card({ title, description,btnText="click" }) {
  return (
    <div className="p-4 m-2 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <button className="bg-red-700 font-sans font-bold cursor-pointer">{btnText}</button>
    </div>
  );
}

export default Card;
