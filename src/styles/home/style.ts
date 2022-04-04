import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;

  header {
    flex: 1;
    max-width: 300px;
    min-width: 251px;
  }

  .inputContainer {
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
    }

    input {
      padding: 10px;
      margin-left: 5px;
    }

    button {
      margin-left: 5px;
      padding: 10px;
      background-color: ${(props) => props.theme.colors.background};
      border: 1px solid ${(props) => props.theme.colors.text};
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
