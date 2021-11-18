import React, { useEffect, useState } from "react";
import "./ComponentStyles.js";
import { CardContainer } from "./ComponentStyles.js";
import CountUp from "react-countup";

const Component = (props) => {
  const [qty, setQty] = useState(0);

  useEffect(() => {
    setQty(props.qty);
  }, [props.qty]);

  return (
    <CardContainer>
      <p className="name">{props.name}</p>
      <CountUp
        className="qty"
        start={0}
        end={qty}
        duration={2.5}
        separator=" "
        decimals={2}
        decimal="."
      />
      <p className="unit">μg/m3</p>
    </CardContainer>
  );
};

export default Component;
