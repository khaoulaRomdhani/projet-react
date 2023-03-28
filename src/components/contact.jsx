import React from 'react'



import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
function Contact() {
    return (
       <div>
            <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-warning"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">TastyFood</h2>
                  <p className=" mb-5">Envoyer message !</p>
                  <div className="mb-3"></div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
       
        <Form.Control type="text" placeholder="nom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       
        <Form.Control as="textarea" rows={3} placeholder="message" />
      </Form.Group>
      <Button  variant="warning" type="submit">
        envoyer
      </Button>
    </Form>
    </div>
    </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
   
        </div>
     
    );
}
export default Contact;