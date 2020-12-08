import './App.css';
import React from "react";
import NavArea from "./Components/Navbar";
import {Col, Container, Row} from "react-bootstrap";
import HeroArea from "./Components/HeroArea/HeroArea";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <NavArea/>
        <Container>
            <Row>
                <Col>
                    <HeroArea/>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md="6" xs="10">
                    <Projects/>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <Footer/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
