import { useEffect, useState } from "react";
import { getAll } from "./api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    return async () => {
      const response =  await getAll();
      console.log(response)
      setEmployees(response)
      console.log("This is from useEffect", response);
      console.log(employees)
    };
  }, []);

  return (
    <div className="container">
      <h3 className="text-primary">Employee List</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Date of Joining</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.age}</td>
              <td>{employee.salary}</td>
              <td>{employee.email}</td>
              <td>{employee.doj}</td>
              <td>{employee.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
