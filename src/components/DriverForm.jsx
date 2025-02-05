/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDriver } from "../context/DriverContextProvider";
import { generateId } from "../helpers/generateId";

const DriverForm = ({ edit: data }) => {
  const [formData, setFormData] = useState({
    first_name: data ? data.first_name : "",
    last_name: data ? data.last_name : "",
    gender: data ? data.gender : "",
    birth_date: data ? data.birth_date : "",
  });
  const [errors, setErrors] = useState(null);
  const timeoutRef = useRef(null);
  const { driver, setDriver } = useDriver();
  const navigate = useNavigate();
  const id = generateId();

  // handle change
  const handleChange = (event) => {
    clearTimeout(timeoutRef.current);
    const { name, value } = event.target;
    timeoutRef.current = setTimeout(() => {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }, 700);
  };

  //   handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    const payload = {
      id: data ? data.id : id,
      ...formData,
    };

    if (formData?.first_name && formData?.last_name && formData.birth_date) {
      if (data) {
        const remainDriver = driver.filter((item) => item.id !== data.id);
        setDriver([...remainDriver, payload]);
      } else {
        setDriver((prev) => [...prev, payload]);
        setFormData({});
      }
      navigate("/");
    }
  };

  // validate form
  function validateForm(value) {
    const errors = {};
    !value.first_name && (errors.first_name = "First name is required");
    !value.last_name && (errors.last_name = "Last name is required");
    !value.birth_date && (errors.birth_date = "Date of birth is required");
    return errors;
  }

  return (
    <form className="w-[350px]" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          onChange={handleChange}
          className="w-full mt-2 h-12 text-sm outline-0 border border-[#646cff] px-2 rounded"
          defaultValue={data?.first_name}
          type="text"
          id="first_name"
          name="first_name"
          placeholder="First Name"
        />
        {errors?.first_name && (
          <span className="text-red-600 text-sm">{errors.first_name}</span>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="last_name">Last Name</label>
        <input
          onChange={handleChange}
          className="w-full mt-2 h-12 text-sm outline-0 border border-[#646cff] px-2 rounded"
          defaultValue={data?.last_name}
          type="text"
          // required
          id="last_name"
          name="last_name"
          placeholder="Last Name"
        />
        {errors?.last_name && (
          <span className="text-red-600 text-sm">{errors.last_name}</span>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="gender">Gender</label>
        <select
          onChange={handleChange}
          defaultValue={data?.gender}
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
          onChange={handleChange}
          defaultValue={data?.birth_date}
          type="date"
          name="birth_date"
          // required
          id="birth_date"
          className="w-full mt-2 h-12 text-sm outline-0 border border-[#646cff] px-2 rounded"
        />
        {errors?.birth_date && (
          <span className="text-red-600 text-sm">{errors.birth_date}</span>
        )}
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
