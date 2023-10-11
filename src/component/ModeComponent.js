import React from 'react';
import { Data } from '../Data';

const ModeComponent = () => {
  function calculateMode(arr) {
    const frequencyMap = {};
    arr.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    let maxFrequency = 0;
    let mode = null;

    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        mode = value;
      }
    }

    // Format mode to 3 decimal places
    if (mode !== null && !isNaN(mode)) {
      mode = parseFloat(mode).toFixed(3);
    }

    return mode;
  }

  // Function to calculate the "Gamma" property for each data point
  function calculateGamma(dataPoint) {
    return (dataPoint.Ash * dataPoint.Hue) / dataPoint.Magnesium;
  }

  // Calculate "Gamma" for each data point
  Data.forEach((dataPoint) => {
    dataPoint.Gamma = calculateGamma(dataPoint);
  });

  // Extract the "Gamma" values for class-wise mode calculation
  const gammaValues = Data.map((dataPoint) => dataPoint.Gamma);

  // Calculate the class-wise mode of "Gamma"
  const classMode = calculateMode(gammaValues);

  const properties = [
    "Alcohol",
    "Malic Acid",
    "Ash",
    "Alcalinity of ash",
    "Color intensity",
    "Flavanoids",
    "Hue",
    "Magnesium",
    "Nonflavanoid phenols",
    "OD280/OD315 of diluted wines",
    "Proanthocyanins",
    "Total phenols",
    "Unknown",
    "Gamma",
  ];

  const modeArray = properties.map((property) =>
    calculateMode(Data.map((item) => item[property]))
  );

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            {/* <th>Measure</th>
            {properties.map((property, index) => (
              <th key={index}>{property}</th>
            ))} */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td key="mode">Gamma Mode</td>
            {modeArray.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ModeComponent;
