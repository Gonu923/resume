import React from 'react';
import {Container, Card, ListGroup} from 'react-bootstrap';
export const Skills = () =>{
    return(
        <Container>
            <Card bg="light" style={{ width: '100%' }}>
                <Card.Header>Skills</Card.Header>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item>Hypertext Markup Language(HTML)</ListGroup.Item>
                        <ListGroup.Item>Cascading Style Sheets(CSS)</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>Javascript</ListGroup.Item>
                        <ListGroup.Item>jQuery</ListGroup.Item>
                        <ListGroup.Item>React.js</ListGroup.Item>
                        <ListGroup.Item>Node.js</ListGroup.Item>
                        <ListGroup.Item>MySQL</ListGroup.Item>
                        <ListGroup.Item>PHP</ListGroup.Item>
                    </ListGroup>        
                </Card.Body>
            </Card>
            <br />
        </Container>
    )
}