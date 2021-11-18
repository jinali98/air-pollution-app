import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  padding: 10px;
  background-color: rgb(223, 223, 223);
  font-family: cursive;

  h1 {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 30px;
    }
  }
`;
