import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
function Inscription() {
    return (
        <div>
      <Container>
        <Row className=" d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-warning"></div>
            <Card className="shadow">
              <Card.Body>
                <div >
                  <h2 className="fw-bold mb-2 text-uppercase ">TastyFood</h2>
                  <p className=" mb-1">Inscrivez-vous!</p>
                  <div className="mb-1">
                    <Form>

                    <Form.Group className="mb-1" controlId="formBasicNom">
                        <Form.Label className="text-center">
                          Nom:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Entrer votre nom" />
                      </Form.Group> <Form.Group className="mb-1" controlId="formBasicPrenom">
                        <Form.Label className="text-center">
                         Prénom:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Entrer votre prénom" />
                      </Form.Group>


                      <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Adresse Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Entrer email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-1"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Mot De Passe:</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" />
                      </Form.Group>
                      <Form.Group className="mb-1" controlId="formBasicConfirmePsw">
                        <Form.Label className="text-center">
                         Confirmer votre mot de passe:
                        </Form.Label>
                        <Form.Control type="email" placeholder="Répeter votre mot de passe" />
                      </Form.Group>

                     
                      <div className="d-grid">
                        <Button variant="warning" type="submit">
                        S'inscrire
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        vous avez déja un compte?{" "}
                        <a href="{''}" className="text-warning fw-bold">
                          se connecter
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
export default Inscription;