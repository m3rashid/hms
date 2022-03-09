import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Select from "react-select";

import classes from "./login.module.css";

const loginUser = async (formData) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
};

const options = [
  { value: "", label: "Select role" },
  { value: "ADMIN", label: "ADMIN" },
  { value: "DOCTOR", label: "DOCTOR" },
  { value: "RECEPTIONIST", label: "RECEPTIONIST" },
  { value: "PHARMACIST", label: "PHARMACIST" },
];

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    level: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await loginUser(formData);
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="username"
            required
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            required
          />
        </label>
        <br />
        <br />
        <Select options={options} />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

const LoginModal = ({ buttonLabel }) => {
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        <Button color="danger" onClick={toggleModal}>
          {buttonLabel || "Login"}
        </Button>
        <Modal
          isOpen={open}
          toggle={toggleModal}
          className=""
          style={{
            backgroundColor: "white",
            border: "2px solid black",
            margin: "20px",
            padding: "20px",
          }}
        >
          <ModalBody>
            <Login />
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default LoginModal;
