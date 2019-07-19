import React from 'react';
import {Container, Card, Button, Row, Image, Col} from 'react-bootstrap';
const Home = () =>{
    return(
        <Container className="home-content">
            <Row>
                <Col xs={6} md={12}>
                    <Image className="profile-img" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.0-9/53082588_2228236807417215_3718250172803710976_n.jpg?_nc_cat=104&_nc_eui2=AeF6FMVqVuHzwNv5n6cxRttniMppgLLvhP-8Sk5gojFyD--EKSox8yGbn680be1grPL7uWoZTrWP_fBN8bMMgqFGfvZ0ZUz5SuyEgsNRLBRYaw&_nc_oc=AQnud8qECvsnl3_z-FKB0e_uzftZ6Mkiy6HhWv5rqPdrHPybrZn21DJT9bQwGzmSr5E&_nc_ht=scontent.fzyl1-1.fna&oh=33f503b3d3135f0073c48ef2135a0d05&oe=5DBF7184" roundedCircle />
                </Col>
            </Row>
            <br/>
            <Card className="home-card">
                <Card.Header as="h5">Gonesh Chandra Das</Card.Header>
                <Card.Body>
                    <Card.Title>Full Stack Web Developer</Card.Title>
                    <Card.Text>
                    I'm friendly with new technologies
                    </Card.Text>
                    <Button variant="dark">HTML || CSS || BOOTSTRAP || JAVASCRIPT || REACT.JS || NODE.JS || MYSQL</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Home;