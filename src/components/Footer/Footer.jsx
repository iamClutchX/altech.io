import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";
import "./footer.scss";

export default function App() {
  return (
    <div className="footer">
      <MDBFooter
        className="text-center text-white "
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <MDBContainer className="pt-4 ">
          <section className="mb-4">
            <MDBBtn
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fab fa-facebook-f" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-twitter" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-google" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-instagram" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-linkedin" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              link
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://altech.io/">
            <span className="logo_text">AlTech</span>
            <span className="td">.io</span>
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
