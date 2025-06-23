import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../CreateProject/CreateProject.css";

const UpdateProfile = () => {
  return (
    <Container fluid className="create-project-container mt-4">
      <h4 className="form-title mb-4">Update Profile</h4>

      <Form>
        {/* Name and Email Row */}
        <Row className="g-3 mb-5">
          <Col md={6}>
            <Form.Group controlId="projectTitle">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="projectTitle">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" placeholder="Enter your email" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-3 mb-4">
          <Col md={6}>
            <Form.Group controlId="projectTitle">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="text" placeholder="Enter your password" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="projectTitle">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="text" placeholder="Confirm your password" />
            </Form.Group>
          </Col>
        </Row>

      

        {/* Create Button */}
        <Button variant="primary" className="create-btn">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateProfile;
