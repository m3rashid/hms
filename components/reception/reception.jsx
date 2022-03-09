import React from "react";
import Select from "react-select";

import classes from "./reception.module.css";

// model Patient {
//   gender       String
//   lastVisit    DateTime
//   contact      String
//   address      String
//   email        String
//   jamiaId      String
//   Appointment  Appointment[]
//   Prescription Prescription[]
// }

const options = [
  { name: "gender", value: "MALE", label: "MALE" },
  { name: "gender", value: "FEMALE", label: "FEMALE" },
  { name: "gender", value: "OTHERS", label: "OTHERS" },
];

const CreatePatient = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGender = (e) => {
    // setFormData((prev) => ({
    //   ...prev,

    // }))
    console.log(e);
  };

  return (
    <div>
      <form action="" method="post">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Patient Name"
          required
        />
        <input type="date" name="age" placeholder="Patient Age" required />
        <Select
          theme="primary25"
          options={options}
          onChange={handleGender}
          name="gender"
        />
      </form>
    </div>
  );
};

export default CreatePatient;
