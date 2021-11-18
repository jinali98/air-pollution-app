import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 50px auto;
  border-radius: 30px;
  padding: 30px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );

  .graph {
    background-color: rgb(236, 236, 236);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 3px 3px 6px 3px #454549;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
`;
