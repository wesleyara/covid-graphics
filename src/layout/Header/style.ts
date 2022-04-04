import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.headerBackground};
  height: 100vh;
  overflow: auto;

  input {
    padding: 5px;
  }

  ul {
    list-style: none;
    margin-top: 10px;

    li {
      padding: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.colors.hover};
      }
    }
  }
`;
