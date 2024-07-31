import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const FormCE = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const edit = location.state?.edit || false;

  const [formValue, setFormvalue] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormvalue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const name = formValue.username;
  const email = formValue.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://crud-mern-q7ie.onrender.com/createUser", { name, email })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
    // navigate("/");
    // console.log(formValue);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <Form className="w-25 align-self-center">
        <Form.Group className="mb-4" controlId="username">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter  Name"
            value={formValue.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formValue.email}
            onChange={handleChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormCE;
