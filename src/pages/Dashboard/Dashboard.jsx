import { Card, Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";

const stats = [
  { title: "New Task", count: "240,452" },
  { title: "In Progress", count: "240,452" },
  { title: "Complete", count: "240,452" },
  { title: "Canceled", count: "240,452" },
];

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container mt-4">
      <h4 className="dashboard-title">All Data</h4>
      <Row className="g-4 justify-content-center">
        {stats.map((stat, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3}>
            <Card className="dashboard-card text-center shadow-sm">
              <Card.Body>
                <div className="icon-box">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="stat-count">{stat.count}</div>
                <div className="stat-title">{stat.title}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
