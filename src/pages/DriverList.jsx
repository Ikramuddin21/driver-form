import React from "react";
import { Link } from "react-router-dom";
import { useDriver } from "../context/DriverContextProvider";

const DriverList = () => {
  const { driver, setDriver } = useDriver();

  // handle calculate age
  const calculateAge = (birthDate) => {
    const today = new Date();
    const selectedBirthDate = new Date(birthDate);
    let age = today.getFullYear() - selectedBirthDate.getFullYear();
    const month = today.getMonth() - selectedBirthDate.getMonth();
    if (
      month < 0 ||
      (month === 0 && today.getDate() < selectedBirthDate.getDate())
    )
      age--;

    return age;
  };

  // handle delete driver
  const handleDeleteDriver = (id) => {
    const remainDriver = driver.filter((item) => item.id !== id);
    setDriver(remainDriver);
  };
  console.log("driver", driver);

  return (
    <div className="">
      <div>
        <h1 className="text-3xl mb-6">DriverList</h1>
        {driver?.length ? (
          <table className="text-md border-collapse border border-gray-300 [&_td]:border [&_td]:border-gray-300 [&_td]:p-2 w-full text-center">
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Age</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {driver?.map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{calculateAge(item.birth_date)}</td>
                  <td>
                    <div className="flex justify-center space-x-2">
                      <Link to={`/edit-driver/${item.id}`}>
                        <button className="!bg-orange-700 text-white">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDeleteDriver(item.id)}
                        className="!bg-red-700 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-lg">No drivers added</p>
        )}
        <Link to="/add-driver">
          <button className="mt-7 text-sm">Add Driver</button>
        </Link>
      </div>
    </div>
  );
};

export default DriverList;
