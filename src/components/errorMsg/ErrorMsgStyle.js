import styled from "styled-components";

export const ErrorMsgContainer = styled.div`
  width: 50%;
  margin: 30px auto;
  text-align: center;
  border-radius: 30px;
  padding: 30px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );

  div {
    background-color: white;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
  }

  .msg {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-weight: 700;
    color: red;
  }

  @media (max-width: 768px) {
    width: 90%;
    .msg {
      font-size: 25px;
      font-weight: 500;
    }
  }

  @media (max-width: 360px) {
    width: 90%;
    .msg {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
