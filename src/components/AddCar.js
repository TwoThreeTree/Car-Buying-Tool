import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import CarDataService from "../services/crud";

const AddCar = ({ id, setCarId }) => {
  const [makeModel, setMakeModel] = useState("");
  const [vin, setVin] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (makeModel === "" || vin === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newCar = {
      makeModel,
      vin,
      status,
    };
    console.log(newCar);

    try {
      if (id !== undefined && id !== "") {
        await CarDataService.updateCar(id, newCar);
        setCarId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await CarDataService.addCar(newCar);
        setMessage({ error: false, msg: "New Car added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setMakeModel("");
    setVin("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await CarDataService.getCar(id);
      console.log("the record is :", docSnap.data());
      setMakeModel(docSnap.data().makeModel);
      setVin(docSnap.data().vin);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formMakeModel">
            <InputGroup>
              <InputGroup.Text id="formMakeModel">Car</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Car makeModel"
                value={makeModel}
                onChange={(e) => setMakeModel(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formVin">
            <InputGroup>
              <InputGroup.Text id="formVin">Vin</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Car vin"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddCar;
