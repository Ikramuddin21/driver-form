/* eslint-disable react/prop-types */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDriver } from "../context/DriverContextProvider";
import { generateId } from "../helpers/generateId";

const DriverForm = ({ edit: data }) => {
  const { setDriver } = useDriver();
  const navigate = useNavigate();
  const id = generateId();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      gender: event.target.gender.value,
      birth_date: event.target.birth_date.value,
    };

    setDriver((prev) => [...prev, data]);

    event.target.first_name.value = "";
    event.target.last_name.value = "";
    event.target.gender.value = "";
    event.target.birth_date.value = "";
    navigate("/");
  };

  return (
    <form className="w-[350px]" onSubmit={handleSubmit}>
      <div className="">
        <label htmlFor="first_name">First Name</label>
        <input
          className="w-full mt-2 h-12 text-sm outline-0 border border-[#646cff] px-2 rounded"
          defaultValue={data.first_name}
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="last_name">Last Name</label>
        <input
          className="w-full mt-2 h-12 text-sm outline-0 border border-[#646cff] px-2 rounded"
          defaultValue={data.last_name}
          type="text"
          id="last_name"
          name="last_name"
          placeholder="Last Name"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="gender">Gender</label>
        <select
          defaultValue={data.gender}
          name="gender"
          id="gender"
          className="w-full mt-2 h-12 text-sm outline-0 border border-[#646cff] px-2 rounded"
        >
          <option value="">Choose One</option>
          <option value="Male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mt-5">
        <label htmlFor="birth_date">Date of Birth</label>
        <input
          defaultValue={data.birth_date}
          type="date"
          name="birth_date"
          id="birth_date"
          className="w-full mt-2 h-12 text-sm outline-0 border border-[#646cff] px-2 rounded"
        />
      </div>
      <div className="mt-5 flex justify-between">
        <button type="submit" className="!bg-blue-500 text-white">
          {data ? "Edit" : "Submit"}
        </button>
        <Link to="/">
          {data ? <button>Back</button> : <button type="reset">Back</button>}
        </Link>
      </div>
    </form>
  );
};

export default DriverForm;
