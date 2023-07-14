import { useState } from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import AddCar from "./components/AddCar";
import CarsList from "./components/CarsList";
import "./App.css";
import ControlMenu from "./components/ControlMenu";

function App() {
  const [carId, setCarId] = useState("");

  const getCarIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setCarId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Car Shopping Tool</Navbar.Brand>
          <Button variant="outline-info" className="ml-auto">
            Logout
          </Button>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddCar id={carId} setCarId={setCarId} />
          </Col>
        </Row>
      </Container>
      <Container style={{ width: "800px" }}>
        <Row>
          <Col>
            <CarsList getCarId={getCarIdHandler} />
          </Col>
        </Row>
      </Container>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <ControlMenu />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
