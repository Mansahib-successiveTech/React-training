"use client";

import { useMemo, useState } from "react";

const EmployeeSalary = () => {
  let result = 0;
  const [employeeList, setEmployeeList] = useState([]);
  const [employee, setEmployee] = useState("");
  const [salary, setSalary] = useState(0);

  const ShowAverage = useMemo(() => {
    if (!employeeList) {
      return 0;
    }
    result = employeeList.reduce((acc, element) => acc + element.salary, 0);
    return result / employeeList.length;
  }, [employeeList]);

  const addEmployee = () => {
    if (employee && salary) {
      setEmployeeList((prev) => [
        ...prev,
        {
          name: employee,
          salary: parseFloat(salary), // make sure it's a number
        },
      ]);
      setEmployee(""); 
      setSalary("");
    }
  };

  return (
    <>
      <p>employees list</p>

      {employeeList.map((items, index) => (
        <p key={index}>
          {items.name} -- {items.salary}
        </p>
      ))}
      <p>add employee</p>
      <input value={employee} onChange={(e) => setEmployee(e.target.value)} />
      <p>salary</p>
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <br></br>
      <button onClick={addEmployee}>add reocrd</button>
      <p>new salary avg:{ShowAverage?Math.floor(ShowAverage):0}</p>
      
    </>
  );
};
export default EmployeeSalary;
