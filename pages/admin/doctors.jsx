import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const products = [
  {
    id: "rc2929",
    name: "String",
    availability: "Int",
    age: "String",
    designation: "DateTime",
    contact: "String",
    email: "String",
    address: "String",
  },
];
const columns = [
  {
    dataField: "id",
    text: "Doctors ID",
  },
  {
    dataField: "name",
    text: "Name",
  },
  {
    dataField: "availability",
    text: "Availability",
  },
  {
    dataField: "age",
    text: "Age",
  },
  {
    dataField: "designation",
    text: "Designation",
  },
  {
    dataField: "contact",
    text: "Contact",
  },
  {
    dataField: "email",
    text: "Email",
  },
  {
    dataField: "address",
    text: "Address",
  },
  
];


const Doctors = () => {
  return (
      <>
        <div
            className={`d-flex flex-column justify-content-center align-items-center`}
        >
          <h2
              className={`my-3`}
          >Doctors Data</h2>
        </div>
        <div
            className="admin-table"
        >
          <BootstrapTable
              wrapperClasses="m-3 shadow-sm"
              keyField="id"
              data={products}
              columns={columns}
              hover
              bordered
          />
        </div>
      </>
  );
};

export default Doctors;
