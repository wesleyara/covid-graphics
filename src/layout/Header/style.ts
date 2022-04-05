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
        color: white;
      }
    }

    li.search {
      &:hover {
        background-color: ${(props) => props.theme.colors.headerBackground};
        color: black;
      }
    }
  }

  .btnMenu {
    display: none;
  }

  @media (max-width: 765px) {
    .btnMenu {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: white;
      border: none;
      cursor: pointer;
      padding: 5px;
      font-size: 30px;
    }

    ul {
      display: block;
      position: absolute;
      width: 100%;
      top: 80px;
      right: 0px;
      height: 0px;
      z-index: 999;
      visibility: hidden;
      overflow: hidden;
      background-color: ${(props) => props.theme.colors.headerBackground};

      li {
        padding: 15px 2rem;
        transition: 0ms;
      }
    }

    nav.active ul {
      height: calc(100vh - 50px);
      visibility: visible;
      overflow: auto;
    }

    nav.active button {
      color: black;
    }
  }
`;
