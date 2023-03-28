import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function Connecter() {
    
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
                  <p className=" mb-5">Veuillez saisir votre identifiant et votre mot de passe !</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Adresse Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Entrer email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Mot De Passe</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-warning" href="#!">
                            Mot De Passe Oubliée?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="warning" type="submit">
                         Connexion
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Créer Un Compte!{" "}
                        <a href="{''}" className="text-warning fw-bold">
                          Inscription
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
        
export default Connecter;