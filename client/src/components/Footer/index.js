import React from "react";
import "./index.css";
import Button from "@material-ui/core/Button";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

var { SocialIcon } = require("react-social-icons");

function Footer() {
  return (
    <Box>
      <Container>
        <Row>
          {/* Column1 */}
          <Column>
            <Heading>Parking Click</Heading>
            <FooterLink href="#"> info@parkingclick.com</FooterLink>
            <FooterLink href="#"> parkingclik@gmail.com</FooterLink>
          </Column>
          {/* Column2 */}
          <Column>
            <Heading>Stuff</Heading>
            <FooterLink href="#">Mr.Pradeep</FooterLink>
            <FooterLink href="#">Mr.Thomus</FooterLink>
            <FooterLink href="#">Service Pro</FooterLink>
            <FooterLink href="#">Other Stuff</FooterLink>
          </Column>
          {/* Column3 */}
          <Column>
            <Heading>Details & Contact</Heading>
            <FooterLink href="/About">About US</FooterLink>
            <FooterLink href="/Contact">Contact US</FooterLink>
            <FooterLink href="#">Get Support</FooterLink>
          </Column>
           {/* Column3 */}
           <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
        </Row>
        <hr />
        <hr />
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Parking Click | All rights reserved
            | Terms Of Service | Privacy&nbsp;&nbsp;
            <SocialIcon url="https://linkedin.com" />
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://jaketrent.com" network="tumblr" />
            <SocialIcon network="twitter" bgColor="#ff5a01" />
            <SocialIcon network="pinterest" style={{ height: 50, width: 50 }} />
            <SocialIcon url="https://www.example.com" label="Our portfolio" />
          </p>
        </div>
      </Container>
    </Box>
  );
}

export default Footer;
