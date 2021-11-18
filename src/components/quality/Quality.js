import React from "react";
import "./QualityStyles.js";
import { ContainerMsg } from "./QualityStyles.js";

const Quality = (props) => {
  const index = props.index;
  let msg = "";

  if (index === 1) {
    msg = "Good";
  }
  if (index === 2) {
    msg = "Fair";
  }
  if (index === 3) {
    msg = "Moderate";
  }
  if (index === 4) {
    msg = "Poor";
  }
  if (index === 5) {
    msg = "Very Poor";
  }

  return (
    <ContainerMsg>
      <div>
        <p className="msg">Air Quality is {msg}</p>
      </div>
    </ContainerMsg>
  );
};

export default Quality;
