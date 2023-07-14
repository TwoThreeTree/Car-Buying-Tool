import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import CarDataService from "../services/crud";

const CarsList = ({ getCarId }) => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const data = await CarDataService.getAllCars();
    console.log(data.docs);
    setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await CarDataService.deleteCar(id);
    getCars();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getCars}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(cars, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>make Model</th>
            <th>vin</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.makeModel}</td>
                <td>{doc.vin}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getCarId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CarsList;
