import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import NavProfile from "./NavProfile";
import NavLinks from "./NavLinks";

import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <Container fluid className={styles.gridHeader}>
      <Navbar variant={"light"} collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand as={Link} to="/">
          MERN ToDo
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLinks />

          <NavProfile />
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
