import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const products = [
  {
    id: "rc2929",
    name: "String",
    age: "Int",
    gender: "String",
    lastVisit: "DateTime",
    contact: "String",
    address: "String",
    email: "String",
    jamiaId: "String",
  },
];
const columns = [
  {
    dataField: "id",
    text: "Patients ID",
  },
  {
    dataField: "name",
    text: "Name",
  },
  {
    dataField: "age",
    text: "Age",
  },
  {
    dataField: "gender",
    text: "Email",
  },
  {
    dataField: "address",
    text: "Address",
  },
  {
    dataField: "lastVisit",
    text: "Last Visit",
  },
  {
    dataField: "name",
    text: "Name",
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
  {
    dataField: "email",
    text: "Email",
  },
  {
    dataField: "jamiaId",
    text: "Jamia ID",
  },
];
const Patients = () => {
  return (
    <>
      <div
        className={`d-flex flex-column justify-content-center align-items-center`}
      >
        <h2 className={`my-3`}>Patients Data</h2>
      </div>
      <div className="admin-table">
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

export default Patients;
