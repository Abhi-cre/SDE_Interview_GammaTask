import React from 'react';
import { Data } from '../Data';

const MeanComponent = () => {
  // Function to calculate the mean of an array
  function calculateMean(arr) {
    const sum = arr.reduce((total, value) => total + value, 0);
    return (sum / arr.length).toFixed(3); // Format the mean value to 3 decimal places
  }

  // Function to create the "Gamma" property for each data point
  function calculateGamma(dataPoint) {
    return (dataPoint.Ash * dataPoint.Hue) / dataPoint.Magnesium;
  }

  // Calculate "Gamma" for each data point and add it to the dataset
  Data.forEach((dataPoint) => {
    dataPoint.Gamma = calculateGamma(dataPoint);
  });

  // Extract the "Gamma" values for class-wise mean calculation
  const gammaValues = Data.map((dataPoint) => dataPoint.Gamma);

  // Calculate the class-wise mean of "Gamma"
  const classMean = calculateMean(gammaValues);

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

  const meanArray = properties.map((property) =>
    calculateMean(Data.map((item) => item[property]))
  );

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Measure</th>
            {properties.map((property, index) => (
              <th key={index}>{property}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {meanArray.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MeanComponent;
