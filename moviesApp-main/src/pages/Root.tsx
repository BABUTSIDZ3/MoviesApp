import { Link, Outlet } from "react-router-dom";
import {
  ClipBoard,
  Header,
  NavIcons,
  OutletDiv,
  Ul,
  ParentDiv,
  ChangeTheme,
} from "../assets/MoviesStyles";
import { useEffect, useState } from "react";
import styled from "styled-components";
const isloggedin = localStorage.getItem("usertoken");
const currentTheme = localStorage.getItem("color");
export default function Root() {
  const defaultColor = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
  const currentColor = () => {
    const current = localStorage.getItem("color");
    return current || defaultColor;
  };
  const [color, setColor] = useState(currentColor());
  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <ParentDiv>
      {!isloggedin ? null : (
        <Header>
          <Ul>
            <li>
              <Link to="/moviesApp">
                <ClipBoard className="fa-solid fa-clapperboard"></ClipBoard>
              </Link>
            </li>
            <li>
              <Link to="homepage">
                <NavIcons className="fa-solid fa-border-all"></NavIcons>
              </Link>
            </li>
            <li>
              <Link to="movies">
                <NavIcons className="fa-solid fa-film"></NavIcons>
              </Link>
            </li>
            <li>
              <Link to="tvseries">
                <NavIcons className="fa-solid fa-tv"></NavIcons>
              </Link>
            </li>
            <ChangeTheme
              onClick={() => {
                setColor(color == "dark" ? "light" : "dark");
                refreshPage();
              }}
              className={`fa-solid fa-${
                currentTheme == "light" ? "moon" : "sun"
              }`}
            ></ChangeTheme>
          </Ul>
        </Header>
      )}
      <OutletDiv>
        <Outlet />
      </OutletDiv>
    </ParentDiv>
  );
}

