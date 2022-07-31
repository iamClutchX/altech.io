import React from "react";
import "./navbar.scss";
import logo from "../../../src/assets/logo_bg.png";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
const Navbar = () => {
  return (
    <>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img src={logo} height="30" alt="" loading="lazy" />
            <span className="logo_text">AlTech</span>
            <span className="td">.io</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};
export default Navbar;
