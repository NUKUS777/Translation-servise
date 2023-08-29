import React from "react";
import Header_page from "./components/Header/Header";
import Footer_page from "./components/Footer/Footer";
import "./public.css";
import styled from "styled-components";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";


const Public = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header  id="nima">
                <Header_page />
              </Header>
              <Footer>
                <Footer_page />
              </Footer>
            </>
          }
        />
        <Route path="/users" element={<>User page</>} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<>Erro 404 bunaqa page topilmadi!!!!</>} />
      </Routes>
    </>
  );
};

export default Public;

const Header = styled.header`
  background-color: #fff;
  overflow-x: hidden;

`;
const Footer = styled.footer`
  background-color: #fb991d;
  overflow-x: hidden;

`;
