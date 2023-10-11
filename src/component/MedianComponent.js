import React from 'react';
import { Data } from '../Data';

const MedianComponent = () => {
  // Function to calculate the median of an array
  function calculateMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
      const median1 = sortedArr[middleIndex - 1];
      const median2 = sortedArr[middleIndex];
      return ((median1 + median2) / 2).toFixed(3); // Format median to 3 decimal places
    } else {
      return sortedArr[middleIndex].toFixed(3); // Format median to 3 decimal places
    }
  }

  // Function to calculate the "Gamma" property for each data point
  function calculateGamma(dataPoint) {
    return (dataPoint.Ash * dataPoint.Hue) / dataPoint.Magnesium;
  }

  // Calculate "Gamma" for each data point
  Data.forEach((dataPoint) => {
    dataPoint.Gamma = calculateGamma(dataPoint);
  });

  // Extract the "Gamma" values for class-wise median calculation
  const gammaValues = Data.map((dataPoint) => dataPoint.Gamma);

  // Calculate the class-wise median of "Gamma"
  const classMedian = calculateMedian(gammaValues);

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

  const medianArray = properties.map((property) =>
    calculateMedian(Data.map((item) => item[property]))
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
            <td>Gamma Median</td>
            {medianArray.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MedianComponent;
