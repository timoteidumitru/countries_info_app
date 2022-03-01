import React, { useContext } from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DataContext from "../../context/DataContext";

const HeaderWrapper = styled.div.attrs((props) => ({
  theme: props.theme || "",
}))`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-weight: ${(props) => props.theme.fontWeight};
  box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
  @media (max-width: 412px) {
    padding: 2em 1em;
    & > h1 {
      font-size: 1em;
    }
    & > div {
      font-size: 0.85em;
    }
  }
  & > h1 {
    cursor: default;
  }
  & > div {
    display: flex;
    right: 0;
    padding-right: 0;
    margin-right: 0;
    align-items: center;
    cursor: pointer;
  }
`;

export default function Header() {
  const { theme, changeTheme, handleChange } = useContext(DataContext);

  return (
    <HeaderWrapper theme={theme}>
      <h1>Where in the world?</h1>
      <div onClick={handleChange}>
        <i className="fa-solid fa-moon"></i> {"  "}
        <p>{changeTheme === "darkMode" ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </HeaderWrapper>
  );
}
