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
    toast.loading("Logging you in ...");
    try {
      const result = await loginUser(formData);
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
      setLoading(false);
      toast.dismiss();
      toggleModal();
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {/* make sure there is only one loading toast on the screen */}
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
          onChange={(value) => {
            setFormData((prev) => ({
              ...prev,
              level: value.value,
            }));
          }}
          options={options}
          placeholder="Select Auth Level"
        />
        <button className={classes["submit-button"]} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const LoginModal = () => {
  const loginRef = React.useRef();
  const [open, setOpen] = React.useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className={classes["login-div"]} ref={loginRef}>
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
