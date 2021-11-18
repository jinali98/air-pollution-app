import React from "react";

const CurrentDate = () => {
  let date = new Date();
  let currentDate = date.toDateString();

  return <div>{currentDate}</div>;
};

export default CurrentDate;
