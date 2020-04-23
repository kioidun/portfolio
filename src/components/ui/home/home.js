import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Navigation from "../../common/Navigation";
import ImageDuncan from "../../../assets/duncan.jpeg";

const Styles = styled.div`
background-color: #015761;
width:50%;
height: 100vh;
margin-top: 0;padding:0;
}`;

const Header = styled.h3`
  color: #f7dc4f;
  margin-left: 50px;
  margin-top: 30px;
  font-size: 25px;
`;
const Header2 = styled.h3`
  color: #f7dc4f;
  margin-left: 100px;
  margin-top: 150px;
  font-size: 48px;
`;
const Header3 = styled.h3`
  color: #fff;
  margin-left: 100px;
  font-size: 114px;
`;
const Header4 = styled.h3`
  color: #fff;
  margin-left: 100px;
  font-size: 15px;
`;
const Styles2 = styled.div`
background-color: #fff;
width:50%;
height: 100vh;
margin-top = '1000px'
margin-left = '10000px' 
`;

export default function Home() {
  return (
    <React.Fragment>
      <Container fluid="true">
        <Row>
          <Styles>
            <Col md={6}>
              <Header>Duncan kioi</Header>
              <Navigation />

              <Header2>Hey, I'm</Header2>
              <Header3>Duncan Kioi</Header3>
              <Header4>Android /React /Mentor /Teach</Header4>
            </Col>
          </Styles>
          <Styles2>
            <Col md={6}>
              <img
                src={ImageDuncan}
                style={{ margin: "140px", position: "fluid" }}
                width="400px"
                height="500px"
                alt='duncan'
              />
            </Col>
          </Styles2>
        </Row>
      </Container>
    </React.Fragment>
  );
}
