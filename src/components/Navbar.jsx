import React, { useEffect, useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, experiences } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current?.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

 useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current?.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={"/"}>
        {`<${mainBody.middleName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
           {about.show && (
            <NavLink
              className="nav-item lead"
              href={"/#aboutme"}
            >
              About
            </NavLink>
          )}
           {experiences.show && (
            <NavLink
              className="nav-item lead"
              href={"/#experience"}
            >
              Experience
            </NavLink>
          )}
          {repos.show && (

            <NavLink
              href={"/#projects"}
            >
              Projects
            </NavLink>
          )}
          <NavLink className="nav-item lead" href={"/#services"}>Services</NavLink>
          <NavLink className="nav-item lead" href={"/#responsive-demo"}>Demo</NavLink>
          <NavLink className="nav-item lead" href={"/#contact"}>Contact</NavLink>
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
          {/* Skills section is currently hidden.
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={"/#skills"}
            >
              Skills
            </NavLink>
          )}
          */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
