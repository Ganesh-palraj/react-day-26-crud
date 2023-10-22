import React, { useEffect, useState } from "react";
import { Input, Button } from "reactstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Action = ({ getUsers }) => {
  const initialFormValues = {
    name: "",
    image: "",
    description: "",
    JobTitle: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const nav = useNavigate();

  const { id, isView } = useParams();

  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (id) {
      fetch("https://63de12f9f1af41051b0d2ca2.mockapi.io/login/" + id)
        .then((data) => data.json())

        .then((res) => setFormValues(res));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = () => {
    if (id) {
      fetch("https://63de12f9f1af41051b0d2ca2.mockapi.io/login/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }).then((res) => {
      getUsers();
      setFormValues(initialFormValues)});
      
      nav(-1);
      
    } else {
      fetch("https://63de12f9f1af41051b0d2ca2.mockapi.io/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }).then((res) => {
        getUsers();
        setFormValues(initialFormValues);
      });
      
      nav(-1);
      
    }
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          disabled={state.isView === true ? true : false}
        />

        <label htmlFor="name">Image</label>
        <Input
          type="text"
          name="image"
          value={formValues.image}
          disabled={state.isView === true ? true : false}
          onChange={handleChange}
        />

        <label htmlFor="name">Description</label>
        <Input
          type="text"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          disabled={state.isView === true ? true : false}
        />

        <label htmlFor="name">Job Title</label>
        <Input
          type="text"
          name="JobTitle"
          value={formValues.JobTitle}
          onChange={handleChange}
          disabled={state.isView === true ? true : false}
        />

        <Button
          color="success"
          className="actionButton"
          onClick={handleSubmit}
          disabled={state.isView === true ? true : false}
        >
          submit{" "}
        </Button>

        <Button color="danger" className="actionButton" onClick={() => nav(-1)}>
          cancel
        </Button>
      </form>
    </>
  );
};

export default Action;
