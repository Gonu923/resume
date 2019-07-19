import React from 'react';
import {Container,Row,Col,Form, Button} from 'react-bootstrap';
const Contact = () =>{
    return(
        <Container>
            <h1>Contact with me</h1>
            <br/>
            <hr/>
            <br/>
            <Row>
                <Col sm={5}>
                    <h3>Contact Details</h3>
                    <hr/>
                    <p><span className="glyphicon glyphicon-envelope"/> Email: shuvobroto923@gmail.com</p>
                    <p>Phone: (880) 01753-882282, (880) 01994901067</p>
                    <p>Skypee: gonesh923@hotmail.com</p>
                    <p>Address: 13/1 Pollobi Abashik Alaka, Ponitulla, Sylhet-3100</p>

                </Col>
                <vr/>
                <Col sm={7}>
                    <h3>Send me your message</h3>
                    <hr/>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Shuvo Broto Das">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Type your message"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;