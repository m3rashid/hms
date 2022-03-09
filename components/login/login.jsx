import React from "react";
import { Modal, ModalBody } from "reactstrap";
import Select from "react-select";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

import { customSelectStyles, loginUser, options } from "./login.helpers";
import classes from "./login.module.css";

const Login = ({ toggleModal }) => {
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

  const showLoadingToast = () => {
    toast.loading("Logging you in");
  };

  return (
    <>
      {/* make sure there is only one loading toast on the screen */}
      {loading && showLoadingToast()}
      <button className={classes["cancel-button"]} onClick={toggleModal}>
        <AiOutlineClose />
      </button>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Enter Username"
          required
          className={classes["input"]}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
          required
          className={classes["input"]}
        />
        <Select
          styles={customSelectStyles}
          theme="primary25"
          options={options}
        />
        <button className={classes["submit-button"]} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

const LoginModal = () => {
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className={classes["login-div"]}>
      <button onClick={toggleModal}>Login</button>
      <Modal
        isOpen={open}
        toggle={toggleModal}
        className={classes["login-modal"]}
      >
        <ModalBody>
          <Login toggleModal={toggleModal} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LoginModal;
