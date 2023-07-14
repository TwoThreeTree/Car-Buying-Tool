import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const carCollectionRef = collection(db, "cars");
class CarDataService {
  addCar = (newCar) => {
    return addDoc(carCollectionRef, newCar);
  };

  updateCar = (id, updatedCar) => {
    const carDoc = doc(db, "cars", id);
    return updateDoc(carDoc, updatedCar);
  };

  deleteCar = (id) => {
    const carDoc = doc(db, "cars", id);
    return deleteDoc(carDoc);
  };

  getAllCars = () => {
    return getDocs(carCollectionRef);
  };

  getCar = (id) => {
    const carDoc = doc(db, "cars", id);
    return getDoc(carDoc);
  };
}

export default new CarDataService();
