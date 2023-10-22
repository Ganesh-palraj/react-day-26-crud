import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Action from "./components/Action";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("https://63de12f9f1af41051b0d2ca2.mockapi.io/login/");
      //  console.log(response)
      const allUsersData = await response.json();
      setUsersData(allUsersData);
      // console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  // const viewData = () => {
  //   console.log(view);
  // };

  // const editData = () => {};

  // const deleteData = () => {};

  useEffect(() => {
   
    getUsers();
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home usersData={usersData} getUsers={getUsers} />} />
          <Route path="/action" element={<Action  getUsers={getUsers} />} />
          <Route path="/action/:id/" element={<Action />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
