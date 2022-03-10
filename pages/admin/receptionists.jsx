import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const products = [
  {
    id: "rc2929",
    name: "rashida",
    contact: "23199310923",
    email: "foo@bar.com",
    address: "nowhere",
  },
];
const columns = [
  {
    dataField: "id",
    text: "Receptionist ID",
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
];
const Receptionists = () => {
  return (
      <>
        <div
            className={`d-flex flex-column justify-content-center align-items-center`}
        >
          <h2
              className={`my-3`}
          >Receptionists Data</h2>
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

export default Receptionists;
