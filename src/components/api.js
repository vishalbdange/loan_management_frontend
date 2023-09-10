import axios from "axios";
const addEmployee = async (employee) => {
  const response = await axios.post(
    "http://localhost:8080/api/employees",
    employee
  );
};

const getAll = async () => {
  const response = await axios.get("http://localhost:8080/api/employees");
  console.log("This is from get All", response.data);
  return response.data;
};

export { addEmployee, getAll };
