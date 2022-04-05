import styled from "styled-components";

export const GraphicsContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 50px;
  max-width: 1100px;
`;

export const Infos = styled.main`
  background-image: url(/assets/background.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  flex: 5;
  text-align: center;
  padding-top: 30px;
  max-width: 1100px;

  h3 {
    margin-bottom: 20px;
    color: white;
  }

  input {
    padding: 15px;
    margin-left: 5px;
    margin-top: 5px;
    background-color: white;
    border: none;
    width: max(120px, 17vw);
  }

  input::placeholder {
    color: black;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  button {
    margin-left: 5px;
    padding: 15px;
    cursor: pointer;
    background-color: white;
    border: none;
  }

  @media (max-width: 765px) {
    padding-top: 80px;
    padding-bottom: 20px;
    position: relative;
    overflow: auto;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    z-index: 0;
  }
`;
