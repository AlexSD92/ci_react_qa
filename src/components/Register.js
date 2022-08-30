import React from "react";
import { Link } from "react-router-dom";

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const Register = () => {
  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className="p-4">
          <h1>Sign up</h1>

            <Form>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control type="text" placeholder="username" name="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control type="password" placeholder="password" name="password1" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password2">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control type="password" placeholder="confirm password" name="password2" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>

        </Container>
        <Container className="mt-3">
          <Link to="/signin">
            Already have an account? <span>Login</span>
          </Link>
        </Container>
      </Col>
      <Col md={6} className="my-auto d-none d-md-block p-2">
      </Col>
    </Row>
  );
};

export default Register;