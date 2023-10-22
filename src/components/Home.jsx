import React from "react";
import { Button } from "reactstrap";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/Bi";
import {  useNavigate } from "react-router-dom";

const Home = ({usersData , getUsers}) => {

  const navigate = useNavigate();

  const deleteData = (id) => {
    fetch("https://63de12f9f1af41051b0d2ca2.mockapi.io/login/" + id, {
      method: "DELETE"
    }).then((res) => { 
      getUsers();
      res.json() })
  }
 

  return (
    <main className="main">
      <header className="header">
        <h1 className="userTitle">users</h1>
        <Button className="addUserButton" color="success" onClick={() => navigate("/action" , {state:{ isView : false }})}>
          Add User
        </Button>
      </header>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Job Title</th>
            <th>Description</th>
            <th>Action Items</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((singleuser) => (
            <tr key={singleuser.id}>
              <td>
                <img style={{ borderRadius: "200px" }} src={singleuser.image} />
              </td>
              <td>{singleuser.name}</td>
              <td>{singleuser.JobTitle}</td>
              <td>{singleuser.description}</td>
              <td>
                <AiFillEdit
                  id="icon"
                  role="button"
                  onClick={() => navigate(`/action/${singleuser.id}`,{state:{ isView : false}})}
                  tabIndex={0}
                />
                <AiFillEye
                  id="icon"
                  role="button"
                  onClick={() => navigate(`/action/${singleuser.id}`,{state:{ isView : true}})}
                  tabIndex={0}
                />
                <BiSolidTrashAlt
                  id="icon"
                  role="button"
                  onClick={() => deleteData(singleuser.id)}
                  tabIndex={0}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Home;
