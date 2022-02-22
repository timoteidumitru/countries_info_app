import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  background-color: #3d3951;
  color: white;
  box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
  & > div {
    display: flex;
    right: 0;
    padding-right: 0;
    margin-right: 0;
    align-items: center;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>Where in the world?</h1>
      <div>
        <i className="fa-solid fa-moon"></i> {"  "}
        <p>Dark Mode</p>
      </div>
    </HeaderWrapper>
  );
}
