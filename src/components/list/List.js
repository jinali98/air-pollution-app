import React from "react";
import Component from "./Component";
import "./ListStyles.js";
import { ListContainer } from "./ListStyles.js";

const List = (props) => {
  return (
    <ListContainer>
      <Component name="Carbon monoxide" qty={props.items.co} />
      <Component name="Ammonia" qty={props.items.nh3} />
      <Component name="Nitrogen monoxide" qty={props.items.no} />
      <Component name="Nitrogen dioxide" qty={props.items.no2} />
      <Component name="Ozone" qty={props.items.o3} />
      <Component name="Fine particles matter" qty={props.items.pm2_5} />
      <Component name="Coarse particulate matter" qty={props.items.pm10} />
      <Component name="Sulphur dioxide" qty={props.items.so2} />
    </ListContainer>
  );
};

export default List;
