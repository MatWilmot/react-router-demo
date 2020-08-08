import React, { useState } from "react";

const Form = (props) => {
  const [form, updateForm] = useState({ email: "", password: "" });

  // this function makes the above two irrelevant
  const modifyForm = (e) => {
    updateForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const emailStyles = () => {
    let styles = "form-control";

    if (form.email.includes("@")) {
      styles += " border-success";
    } else {
      styles += " border-danger";
    }

    return styles;
  };

  const addElement = (props) => {};

  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={modifyForm}
              type="email"
              className={emailStyles()}
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={modifyForm}
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Form;
