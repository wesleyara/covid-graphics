import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;

  header {
    flex: 1;
    max-width: 300px;
    min-width: 251px;
  }
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
    background-color: white;
    border: none;
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
`;
