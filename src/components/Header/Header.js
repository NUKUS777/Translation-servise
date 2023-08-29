// import { Fade } from "react-reveal";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AboutUs, Comment, Contact, Home, Service } from "../../pages";
import "./header.css";

const Header = () => {
  return (
    <Divv>
      <Hamburger_menu className="header">
        <HeaderTop className="header_top">
          <ul className="header_top_list_left menu__box">
            <HeaderLi className="header_top_item_left">
              <NavLink className="header_top_link_left menu__item" to="/#">
                {/* <Fade top>Ins</Fade> */}
                INs
              </NavLink>
            </HeaderLi>
            <HeaderLi className="header_top_item_left">
              <NavLink className="header_top_link_left menu__item" to="/#">
                {/* <Fade top>Tel</Fade> */}
                tel
              </NavLink>
            </HeaderLi>
            <HeaderLi className="header_top_item_left">
              <NavLink className="header_top_link_left menu__item" to="/#">
                {/* <Fade top>Fac</Fade> */}
                fac
              </NavLink>
            </HeaderLi>
            <HeaderLi className="header_top_item_left">
              <NavLink className="header_top_link_left menu__item" to="/#">
                {/* <Fade top>Twi</Fade> */}
                twi
              </NavLink>
            </HeaderLi>
          </ul>
          <ul className="header_top_list_right menu__box">
            <HeaderLi className="header_top_item_right">
              <NavLink className="header_top_link_right menu__item" to="/#">
                {/* <Fade top>Em</Fade> */}
                em
              </NavLink>
            </HeaderLi>
            <HeaderLi className="header_top_item_right">
              <NavLink className="header_top_link_right menu__item" to="/#">
                {/* <Fade top>Tel</Fade> */}
                tel
              </NavLink>
            </HeaderLi>
            <HeaderLi className="header_top_item_right">
              <NavLink className="header_top_link_right menu__item" to="/#">
                {/* <Fade top>Lan</Fade> */}
                lan
              </NavLink>
            </HeaderLi>
          </ul>
        </HeaderTop>
        <HeaderBot className="header_bottom">
          <h1>Tarjimon uchun Header</h1>
          <nav className="header_bottom_nav">
            <input
              className="visually-hidden"
              id="menu__toggle"
              type="checkbox"
            />
            <label className="menu__btn" for="menu__toggle">
              <span className="span"></span>
            </label>
            <ul className="header_bottom_nav_list menu__box">
              <HeaderLiB className="header_bottom_nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header_bottom_nav_link menu__item header-active"
                      : "header_bottom_nav_link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </HeaderLiB>
              <HeaderLiB className="header_bottom_nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header_bottom_nav_link menu__item header-active"
                      : "header_bottom_nav_link"
                  }
                  to="/aboutUs"
                >
                  About Us
                </NavLink>
              </HeaderLiB>
              <HeaderLiB className="header_bottom_nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header_bottom_nav_link menu__item header-active"
                      : "header_bottom_nav_link"
                  }
                  to="/servise"
                >
                  Servise
                </NavLink>
              </HeaderLiB>
              <HeaderLiB className="header_bottom_nav_item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "header_bottom_nav_link menu__item header-active"
                      : "header_bottom_nav_link"
                  }
                  to="/comment"
                >
                  Comment
                </NavLink>
              </HeaderLiB>
              <HeaderLiB className="header_bottom_nav_item">
                <NavLink
                  className="header_bottom_nav_link menu__item"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </HeaderLiB>
            </ul>
          </nav>
        </HeaderBot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Servise" element={<Service />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Hamburger_menu>
    </Divv>
  );
};

export default Header;

const Divv = styled.div``;
const Hamburger_menu = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    #menu__toggle {
      opacity: 0;
    }
    #menu__toggle:checked + .menu__btn > .span {
      transform: rotate(45deg);
    }
    #menu__toggle:checked + .menu__btn > .span::before {
      top: 0;
      transform: rotate(0deg);
    }
    #menu__toggle:checked + .menu__btn > .span::after {
      top: 0;
      transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
      right: 0 !important;
    }
    .menu__btn {
      position: absolute;
      top: 30px;
      right: 20px;
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;
    }
    .menu__btn > .span,
    .menu__btn > .span::before,
    .menu__btn > .span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #616161;
      transition-duration: 0.25s;
    }
    .menu__btn > .span::before {
      content: "";
      top: -8px;
    }
    .menu__btn > .span::after {
      content: "";
      top: 8px;
    }
    .menu__box {
      display: block;
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100%;
      margin: 0;
      margin:0 auto;
      text-align:center;
      padding: 80px 0;
      list-style: none;
      background-color: #eceff18e;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
      transition-duration: 0.25s;
    }
    .menu__item {
      display: block;
      padding: 12px 24px;
      color: #333;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      transition-duration: 0.25s;
    }
    .menu__item:hover {
      background-color: #cfd8dc;
    }
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// const HeaderUl = styled.ul`
//   list-style: none;
//   display: flex;
//   margin: 0;
//   padding: 0 20px;
// `;

const HeaderLi = styled.li`
  margin-left: 30px;
`;

const HeaderBot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  box-shadow: 0px 15px 10px -15px black;
`;


const HeaderLiB = styled.li`
  margin-left: 30px;
  @media only screen and (max-width: 768px) {
    display: block;
    padding: 12px 24px;
    color: #1f1f1f;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
  }
`;
