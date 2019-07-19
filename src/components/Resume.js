import React from 'react';
import {Container, Row, Col, Image, Card} from 'react-bootstrap';
import {Education} from './Education';
import {Experience} from './Experience';
import {Skills} from './Skills';
const Resume = ()=>{
    return(
        <Container>
            <h1>Gonesh Chandra Das</h1>
            <h5>Full Stack Developer</h5>
            <hr/>
           <Row>
               <Col sm={4}>
               <br/>
               
                  <Image className="profile-img" rounded src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.0-9/53082588_2228236807417215_3718250172803710976_n.jpg?_nc_cat=104&_nc_eui2=AeF6FMVqVuHzwNv5n6cxRttniMppgLLvhP-8Sk5gojFyD--EKSox8yGbn680be1grPL7uWoZTrWP_fBN8bMMgqFGfvZ0ZUz5SuyEgsNRLBRYaw&_nc_oc=AQnud8qECvsnl3_z-FKB0e_uzftZ6Mkiy6HhWv5rqPdrHPybrZn21DJT9bQwGzmSr5E&_nc_ht=scontent.fzyl1-1.fna&oh=33f503b3d3135f0073c48ef2135a0d05&oe=5DBF7184"/>
               </Col>
               <Col sm={8}>
                <br />
                   <Education />
               </Col>
           </Row>
           <Row>
               <Col sm={4}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
               </Col>
               <Col sm={8}>
                   <Experience />
               </Col>
           </Row>
           <Row>
               <Col sm={4}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
               </Col>
               <Col sm={8}>
                   <Skills />
               </Col>
           </Row>
        </Container>
    )
}
export default Resume;