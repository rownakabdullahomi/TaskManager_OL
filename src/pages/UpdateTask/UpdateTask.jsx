import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../CreateTask/CreateTask.css";

const UpdateTask = () => {
  return (
    <Container fluid className="create-task-container mt-4">
      <h4 className="form-title mb-4">Update Task</h4>

      <Form>
        {/* Title / Project / Status */}
        <Row className="g-3 mb-4">
          <Col md={4}>
            <Form.Group controlId="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" placeholder="Enter task title" />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="projectName">
              <Form.Label>Project Name:</Form.Label>
              <Form.Select>
                <option>Select a project</option>
                <option>Project Alpha</option>
                <option>Project Beta</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="status">
              <Form.Label>Status:</Form.Label>
              <Form.Select>
                <option>Select status</option>
                <option>New Task</option>
                <option>In Progress</option>
                <option>Complete</option>
                <option>Canceled</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Description */}
        <Form.Group controlId="description" className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Write your task details here..."
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

export default UpdateTask;
