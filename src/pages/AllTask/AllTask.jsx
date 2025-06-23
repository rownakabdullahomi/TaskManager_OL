import { Button, Container, Table } from "react-bootstrap";
import "./AllTask.css";

const tasks = [
  {
    name: "Electronics",
    description: "Devices like smartphones, laptops, TVs, and accessories.",
    date: "25-11-2024",
  },
  {
    name: "Sports & Outdoors",
    description: "Sports gear, activewear, and camping essentials.",
    date: "25-11-2024",
  },
  {
    name: "Health & Beauty",
    description: "Skincare, makeup, fitness equipment, and supplements.",
    date: "25-11-2024",
  },
  {
    name: "Fashion",
    description: "Clothing, footwear, jewelry, and accessories.",
    date: "25-11-2024",
  },
  {
    name: "Home & Kitchen",
    description: "Furniture, appliances, cookware, and decor.",
    date: "25-11-2024",
  },
  {
    name: "Toys & Baby Products",
    description: "Toys, baby care items, and kids’ clothing.",
    date: "25-11-2024",
  },
  {
    name: "Pet Supplies",
    description: "Food, toys, and accessories for pets.",
    date: "25-11-2024",
  },
  {
    name: "Automotive",
    description: "Car accessories, parts, and maintenance tools.",
    date: "25-11-2024",
  },
  {
    name: "Books & Stationery",
    description: "Fiction, textbooks, notebooks, and office supplies.",
    date: "25-11-2024",
  },
  {
    name: "Groceries & Food",
    description: "Fresh produce, snacks, and beverages.",
    date: "25-11-2024",
  },
];

const AllTask = () => {
  return (
    <Container fluid className="all-task-container ">
      <h4 className="mb-4 fw-semibold">All task</h4>

      <Table responsive bordered hover className="task-table">
        <thead className="table-light">
          <tr>
            <th>S.L</th>
            <th>Name</th>
            <th>Description</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.date}</td>
              <td>
                <Button variant="success" size="sm" className="me-2">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="pagination-footer">
        <span className="text-muted">Showing 1 to 10 of 20 entries</span>
        <div className="pagination-controls">
          <Button size="sm" variant="light" className="me-1">
            &lt;
          </Button>
          <Button size="sm" variant="primary" className="me-1">
            1
          </Button>
          <Button size="sm" variant="light">
            2
          </Button>
          <span className="ms-2">&gt;</span>
        </div>
      </div>
    </Container>
  );
};

export default AllTask;
