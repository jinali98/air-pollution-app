import styled from "styled-components";

export const ListContainer = styled.div`
  margin: 50px 0;
  border-radius: 30px;
  padding: 30px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );

  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 25px;
    display: grid;
    gap: 35px;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 360px) {
    margin: 20px 0;
    padding: 15px;
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1fr;
  }
`;
