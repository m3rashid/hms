import React from "react";
import Select from "react-select";

import classes from "./reception.module.css";
import { customSelectStyles } from "../login/login.helpers";
import {Button} from "reactstrap";
import axios from "axios";

const options = [
  { name: "gender", value: "MALE", label: "MALE" },
  { name: "gender", value: "FEMALE", label: "FEMALE" },
  { name: "gender", value: "OTHERS", label: "OTHERS" },
];

const inputs = [
  {
    id: "1",
    type: "text",
    name: "name",
    placeholder: "Patient Name",
    required: true,
  },
  {
    id: "2",
    type: "number",
    name: "age",
    placeholder: "Patient Age",
    required: true,
  },
  {
    id: "3",
    type: "text",
    name: "contact",
    placeholder: "Contact number",
    required: false,
  },
  {
    id: "4",
    type: "text",
    name: "address",
    placeholder: "Address",
    required: false,
  },
  {
    id: "5",
    type: "email",
    name: "email",
    placeholder: "Patient Email",
    required: false,
  },
  {
    id: "6",
    type: "text",
    name: "jamiaId",
    placeholder: "Jamia ID",
    required: false,
  },
];

const CreatePatient = () => {
  const [dateType, setDateType] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    gender: "",
    lastVisit: "",
    contact: "",
    address: "",
    email: "",
    jamiaId: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGender = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.name]: e.value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post('/api/patient/add', formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }


  };

  return (
    <div
    >
      <form
          action=""
          className={`p-2 px-4`}
          method="post"
          onSubmit={handleSubmit}
      >
        <Select
          theme="primary25"
          placeholder="Select gender"
          options={options}
          onChange={handleGender}
          styles={customSelectStyles}
          name="gender"
        />
        {inputs.map((data) => {
          const { id, type, name, placeholder, required } = data;
          return (
            <input
              key={id}
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className={classes["input"]}
              required={required}
            />
          );
        })}
        <input
          type={dateType ? "date" : "text"}
          name="lastVisit"
          value={formData["lastVisit"]}
          onChange={handleChange}
          placeholder="Last Visit"
          className={classes["input"]}
          onFocus={() => setDateType(true)}
          onBlur={() => setDateType(false)}
        />
        <Button type="submit" color={"primary"}
          className={`m-3`}
        >
          Add Patient
        </Button>
      </form>
    </div>
  );
};

export default CreatePatient;
