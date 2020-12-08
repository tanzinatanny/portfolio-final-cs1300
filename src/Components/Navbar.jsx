import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import arrow from '../images/arrow-down.svg';

function NavArea() {
    return (
        <Container>
            <Row>
                <Col>
                    <nav className="nav">
                        <a className="nav-home" href="#">John Doe</a>
                        <div>
                            <a className="nav-resume" href="" target="_blank">
                                My Resume
                                <img alt="" className="nav-resume-download" src={arrow}/>
                            </a>
                        </div>
                    </nav>
                </Col>
            </Row>
        </Container>
    );
}

export default NavArea;
