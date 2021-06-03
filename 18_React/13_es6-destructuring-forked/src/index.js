// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [honda, tesla] = cars;

console.log(honda);
console.log(honda.model);

const {coloursByPopularity: [teslaTopColour], speedStats: {topSpeed: teslaTopSpeed}} = tesla;
const {coloursByPopularity: [hondaTopColour], speedStats: {topSpeed: hondaTopSpeed}} = honda;
console.log(teslaTopSpeed)

// console.log(speedStats);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);