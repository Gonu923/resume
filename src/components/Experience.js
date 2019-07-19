import React from 'react';
import {Container, Card} from 'react-bootstrap';
export const Experience = () =>{
    return(
        <Container>
            <Card bg="light" style={{ width: '100%' }}>
                <Card.Header>Experience</Card.Header>
                <Card.Body>
                    <Card.Title>Full Stack Web Developer</Card.Title>
                    <Card.Title>Duration: <em>May 2019-Current</em></Card.Title>
                    <Card.Text>
                        TechLence 
                    </Card.Text>
                    <hr/>
                    <Card.Title>Fiverr</Card.Title>
                    <Card.Title>Duration: <em>2018-Current</em></Card.Title>
                </Card.Body>
            </Card>
            <br />
        </Container>
    )
}