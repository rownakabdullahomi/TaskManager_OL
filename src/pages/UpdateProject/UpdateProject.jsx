import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../CreateProject/CreateProject.css";

const UpdateProject = () => {
  return (
    <Container fluid className="create-project-container mt-4">
      <h4 className="form-title mb-4">Update Project</h4>

      <Form>
        {/* Title and Status Row */}
        <Row className="g-3 mb-4">
          <Col md={6}>
            <Form.Group controlId="projectTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" placeholder="Enter project title" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="projectStatus">
              <Form.Label>Status:</Form.Label>
              <Form.Select>
                <option>Select status</option>
                <option>Upcoming</option>
                <option>Ongoing</option>
                <option>Completed</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Description */}
        <Form.Group controlId="projectDescription" className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Write project description..."
          />
        </Form.Group>

        {/* Create Button */}
        <Button variant="primary" className="create-btn">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateProject;
