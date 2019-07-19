import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
class Projects extends React.Component{
    render(){
        return(
            <Container className="text-center">
                <h1>All projects I have done!!!</h1>
                <br/>
                <hr/>
                <br/>
                <Row>
                    <Col sm={3} className="project-content">
                        <h3>Coundown System</h3>
                        <p>This is build for different event date wating countdown.</p>
                        <a className="btn btn-primary" href="https://gonu923.github.io/The_First_Event_of_Life/">Live Demo</a>
                    </Col> 
                    <Col sm={3} className="project-content">
                        <h3>WeLive, Concert Theme</h3>
                        <p>This Onepage HTML Theme for musical band and their band shows</p>
                        <a className="btn btn-primary" href="https://gonu923.github.io/WeLive/">Live Demo</a>
                    </Col> 
                    <Col sm={3} className="project-content">
                        <h3>Doctor Appointment System</h3>
                        <p>This is a digital doctor prescribing system.</p>
                        <a className="btn btn-primary" href="https://github.com/Gonu923/DoctorAppointmentSystem">Live Demo</a>
                    </Col>                                          
                </Row>
                <hr/>
                <br/>
                <Row>
                    <Col sm={3} className="project-content">
                        <h3>E-Shop</h3>
                        <p>This refer a patient sufferless Appointment with doctor</p>
                        <Button className="primary">Live Demo</Button>
                    </Col> 
                    <Col sm={3} className="project-content">
                        <h3>E-School</h3>
                        <p>This refer a patient sufferless Appointment with doctor</p>
                        <Button className="primary">Live Demo</Button>
                    </Col> 
                    <Col sm={3} className="project-content">
                        <h3>E-Library</h3>
                        <p>This refer a patient sufferless Appointment with doctor</p>
                        <Button className="primary">Live Demo</Button>
                    </Col>                                          
                </Row>
                <hr/>
                <br/>
                <Row>
                    <Col sm={3} className="project-content">
                        <h3>Agricultural-Help</h3>
                        <p>This refer a patient sufferless Appointment with doctor</p>
                        <Button className="primary">Live Demo</Button>
                    </Col> 
                    <Col sm={3} className="project-content">
                        <h3>Modern Agri Tools Intro.</h3>
                        <p>This refer a patient sufferless Appointment with doctor</p>
                        <Button className="primary">Live Demo</Button>
                    </Col> 
                    <Col sm={3} className="project-content">
                        <h3>E-Health Center</h3>
                        <p>This refer a patient sufferless Appointment with doctor</p>
                        <Button className="primary">Live Demo</Button>
                    </Col>                                          
                </Row>
            </Container>
        )
    }
    
}
export default Projects;