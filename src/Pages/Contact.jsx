import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";

// Import your image

const picture1 = require('../images/phone.png');

export default function Contact() {
    const h3Style = {
        fontFamily: 'cursive',
        fontSize: '2rem',
        color: '#5eb8b8',
        textAlign: 'center',
        marginBottom: '1rem'
    };

    return (
        <Container className="mt-5" style ={{backgroundColor: '#FDFDEC' }}>
            <Row className="mb-4">
                <Col>
                    <h1 className="text-center" style = {{color: '#025B4B'}}>Contact Us</h1>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col style ={{textAlign: 'center', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', color:'#025B4B', fontSize: '20px' }}>
                    {/* <Accordion style ={{backgroundColor:'#025B4B' }}>
                        <Accordion.Item eventKey="0" >
                            <Accordion.Header>Call Us</Accordion.Header>
                            <Accordion.Body>443-938-9932</Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Email Us</Accordion.Header>
                            <Accordion.Body>Rosemary.MenuCentral@gmail.com</Accordion.Body>
                        </Accordion.Item>
                    </Accordion> */}
                    443-938-9932<br/>contactus@rosemary.com
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Image src={picture1} fluid className="rounded mx-auto d-block" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px'}} />
                </Col>
            </Row>
            
        </Container>
    );
}
