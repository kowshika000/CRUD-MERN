import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditForm = () => {
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
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3002/getUser/" + id)
      .then((result) =>
        setFormvalue({
          ...formValue,
          username: result.data.name,
          email: result.data.email,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  const name = formValue.username;
  const email = formValue.email;
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3002/updateUser/" + id, { name, email })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
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
          <Button variant="primary" type="submit" onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditForm;
