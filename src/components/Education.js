import React from 'react';
import {Container, Card} from 'react-bootstrap';
export const Education = () =>{
    return(
        <Container>
            <Card bg="light" style={{ width: '100%' }}>
                <Card.Header>Education</Card.Header>
                <Card.Body>
                    <Card.Title>B.Sc(Engineering), Computer Science & Engineering </Card.Title>
                    <Card.Title>Duration: <em>2016-2019</em></Card.Title>
                    <Card.Text>
                        From: Sylhet International University 
                    </Card.Text>
                    <hr/>
                    <Card.Title>Higher Secondary Certificate</Card.Title>
                    <Card.Title>Duration: <em>2013-2014</em></Card.Title>
                    <Card.Text>
                        From: SAARC International College Bangladesh 
                    </Card.Text>  
                    <hr/>
                    <Card.Title>Secondary School Certificate</Card.Title>
                    <Card.Title>Duration: <em>2011-2012</em></Card.Title>
                    <Card.Text>
                        From: Pathantulla B/L High School 
                    </Card.Text>         
                </Card.Body>
            </Card>
            <br />
        </Container>
    )
}