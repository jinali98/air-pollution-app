import styled from "styled-components";

export const ContainerMsg = styled.div`
  width: 50%;
  margin: 50px auto;
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
    box-shadow: 3px 3px 6px 3px #454549;
  }

  .msg {
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 360px) {
    width: 90%;

    .msg {
      font-size: 20px;
    }
  }
`;
