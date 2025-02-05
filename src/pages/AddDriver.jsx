import React from "react";
import DriverForm from "../components/DriverForm";

const AddDriver = () => {
  return (
    <div>
      <h1 className="text-3xl mb-5">Add Driver</h1>
      <DriverForm edit={null} />
    </div>
  );
};

export default AddDriver;
