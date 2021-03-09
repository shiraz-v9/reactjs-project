import { useState } from "react";
// const [employeeList, setEmployeeList] = useState([]);

const GetData = () => {
  const [employeeList, setEmployeeList] = useState([]);
  return fetch("http://localhost:5000/home").then((response) => {
    setEmployeeList(response.setEmployeeList);
  });
};

export default GetData;
