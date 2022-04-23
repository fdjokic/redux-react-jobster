import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, email, isMember } = values;

    if ((!isMember && !name) || !email || !password) {
      toast.error("Please Fill Out All Fields");
      return;
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  console.log(values.isMember);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMember ? (
          <FormRow
            type="text"
            name="name"
            handleChange={handleChange}
            value={values.name}
            labelText="Name"
          />
        ) : null}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
          labelText="Email"
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
          labelText="Password"
        />
        <button className="btn btn-block">submit</button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
