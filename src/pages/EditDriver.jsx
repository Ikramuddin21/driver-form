import React from "react";
import DriverForm from "../components/DriverForm";
import { useParams } from "react-router-dom";
import { useDriver } from "../context/DriverContextProvider";

const EditDriver = () => {
  const { driver } = useDriver();
  const { id } = useParams();

  const selectedDriver = driver.find((item) => item.id === id);

  return (
    <div>
      <h1 className="text-3xl mb-5">Edit Driver</h1>
      <DriverForm edit={selectedDriver} />
    </div>
  );
};

export default EditDriver;
