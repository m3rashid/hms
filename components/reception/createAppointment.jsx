import React from "react";
import Select from "react-select";

import classes from "./reception.module.css";
import { customSelectStyles } from "../login/login.helpers";

const CreateAppointment = () => {
  const [formData, setFormData] = React.useState({
    patient: "",
    doctor: "",
  });

  const patientOptions = [
    { name: "patient", value: "p1", label: "p1" },
    { name: "patient", value: "p2", label: "p2" },
  ];

  const doctorOptions = [
    { name: "doctor", value: "d1", label: "d1" },
    { name: "doctor", value: "d2", label: "d2" },
  ];

  const handleSelectChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.name]: e.value,
    }));
  };

  const handleSubmission = () => {
    console.log(formData);
  };

  return (
    <div>
      <form
          action=""
          method="post"
          onSubmit={handleSubmission}
      >

        <Select
          theme="primary25"
          placeholder="Select Patient"
          options={patientOptions}
          onChange={handleSelectChange}
          styles={customSelectStyles}
          name="patient"
        />
        <Select
          theme="primary25"
          placeholder="Select Doctor"
          options={doctorOptions}
          onChange={handleSelectChange}
          styles={customSelectStyles}
          name="doctor"
        />
        <button className={classes["submit-button"]} type="submit">
          Add Appointment
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
