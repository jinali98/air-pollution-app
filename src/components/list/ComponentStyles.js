import styled from "styled-components";

export const CardContainer = styled.div`
  text-align: center;
  background-color: white;
  width: 100%;
  height: 130px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 3px 3px 6px 3px #454549;

  .name {
    font-size: 15px;
    font-weight: bolder;
    color: rgb(91, 91, 223);
    margin-bottom: 10px;
  }
  .qty {
    font-size: 40px;
    font-weight: 700;
  }

  .unit {
    font-size: 15px;
    color: #454549;
  }

  @media (max-width: 768px) {
    height: 110px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 3px 3px 6px 3px #454549;

    .name {
      font-size: 12px;
      font-weight: 300;
    }

    .qty {
      font-size: 30px;
      font-weight: 600;
    }
  }

  /* tabs */
  @media (max-width: 768px) {
    height: 110px;
    padding: 10px;
    border-radius: 20px;

    .name {
      font-size: 14px;
      font-weight: 600;
    }

    .qty {
      font-size: 30px;
      font-weight: 600;
    }
  }

  /* for mobile deveices */
  @media (max-width: 360px) {
    height: 110px;
    padding: 10px;
    border-radius: 20px;

    .name {
      font-size: 12px;
      font-weight: 600;
    }

    .qty {
      font-size: 25px;
      font-weight: 600;
    }
  }
`;
