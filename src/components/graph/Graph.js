import React from "react";
import { Bar } from "react-chartjs-2";
import "./GraphStyles.js";
import { Container } from "./GraphStyles.js";

const Graph = (props) => {
  // get the values from the object as an array
  let airCom = Object.keys(props.airData).map((key) => {
    return props.airData[key];
  });
  // add the values in the array
  const total = airCom.reduce((a, b) => a + b, 0);

  //   convert to percentage
  const set = airCom.map((val) => {
    return Number(((val / total) * 100).toFixed(2));
  });

  return (
    <Container>
      <div className="graph">
        <Bar
          data={{
            labels: [
              "Carbon monoxide",
              "Ammonia",
              "Nitrogen monoxide",
              "Nitrogen dioxide",
              "Ozone",
              "Fine particles matter",
              "Coarse particulate matter",
              "Sulphur dioxide",
            ],
            datasets: [
              {
                label: "Quantity",
                data: set,
                backgroundColor: [
                  "rgba(153, 102, 255, 0.5)",
                  "rgba(255, 99, 132, 0.5)",
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 206, 86, 0.5)",
                  "rgba(75, 192, 192, 0.5)",
                  "rgba(255, 159, 64, 0.5)",
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 206, 86, 0.5)",
                ],
                borderColor: [
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 3,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "components",
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "quantity",
                },
              },
            },
          }}
        />
      </div>
    </Container>
  );
};

export default Graph;
