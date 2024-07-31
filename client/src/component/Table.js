import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const TableData = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // const handleEdit = (userId) => {
  //   // navigate(`/form/${users._id}`, { state: { edit: true } });
  //   navigate(`/edit/${userId}`);
  // };

  useEffect(() => {
    axios
      .get("http://localhost:3002")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

 const handleDelete=(id)=>{
  axios.delete('http://localhost:3002/deleteUser/'+id)
  .then(res=>{console.log(res)
    window.location.reload()
  })
  .catch(err=>console.log(err))
 }

  return (
    <div className="w-50 mx-auto mt-5 ">
      <div className="d-flex justify-content-center mb-4">
        <Button variant="outline-info" onClick={() => navigate("/form")}>
          Add +
        </Button>
      </div>
      <Table size="sm" bordered>
        <thead>
          <tr>
            <th style={{ width: "200px" }}>Name</th>
            <th style={{ width: "200px" }}>Email</th>
            <th style={{ width: "160px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="d-flex justify-conter-center gap-3">
                  <Link to={`/edit/${user._id}`}>
                    <Button variant="info">Edit</Button>
                  </Link>
                  <Button variant="danger" onClick={()=>handleDelete(user._id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
