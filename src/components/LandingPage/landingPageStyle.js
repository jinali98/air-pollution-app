import styled from "styled-components";

export const LandingStyles = styled.div`
  display: flex;
  width: 90%;
  margin: 30px auto;
  justify-content: space-between;

  .landing-heading {
    padding: 20px;
  }
  .landing-heading h1 {
    margin: 20px 0;
    font-size: 65px;
    text-align: left;
    color: antiquewhite;
    animation-name: l-animate;
    animation-duration: 4s;
    animation-delay: 0s;
  }
  .landing-heading p {
    margin: 20px 0;
    font-size: 25px;
    text-align: left;
    line-height: 35px;
    letter-spacing: 2px;
    color: rgb(43, 3, 3);
    font-weight: 300;
    animation-name: l-animate;
    animation-duration: 4s;
    animation-delay: 0s;
  }
  .landing-btn {
    padding: 15px 32px;
    margin: 10px 0;
    border-radius: 20px;
    font-size: 20px;
    background-color: #daae51;
    border: none;
    font-weight: 600;
    cursor: pointer;
    animation-name: l-animate;
    animation-duration: 4s;
    animation-delay: 0s;
  }
  .landing-btn:hover {
    background-color: #bb984c;
    border: #daae51 1px solid;
  }

  .landing-img {
    width: 90%;
    margin: 20px;
    animation-name: l-animate;
    animation-duration: 4s;
    animation-delay: 0s;
  }

  @keyframes l-animate {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (min-width: 768px) and (max-width: 1300px) {
    display: flex;
    width: 90%;
    margin: 30px auto;
    justify-content: space-between;

    .landing-heading {
      padding: 10px;
      width: 70%;
    }
    .landing-heading h1 {
      margin: 10px 0;
      font-size: 35px;
    }
    .landing-heading p {
      margin: 10px 0;
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 1px;
    }

    .landing-img img {
      width: 90%;
      margin: 20px;
    }
  }

  @media (min-width: 320px) and (max-width: 766px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px auto;
    text-align: center;

    .landing-heading {
      padding: 10px;
      width: 100%;
    }
    .landing-heading h1 {
      margin: 10px 0;
      font-size: 35px;
      text-align: center;
    }
    .landing-heading p {
      margin: 10px 0;
      font-size: 15px;
      line-height: 25px;
      letter-spacing: 1px;
      text-align: center;
    }

    .landing-img img {
      width: 90%;
      margin: 10px;
    }
  }
`;
