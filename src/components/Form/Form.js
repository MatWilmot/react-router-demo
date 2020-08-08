import React, { useState } from "react";

const Form = () => {
  const [form, updateForm] = useState({ email: "", password: "" });

  // const modifyEmail = (e) => {
  //   updateForm({ ...form, email: e.target.value });

  //   console.log(form);
  // };

  // const modifyPassword = (e) => {
  //   updateForm({ ...form, password: e.target.value });

  //   console.log(form);
  // };

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

  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={modifyForm}
              type="email"
              className={emailStyles()}
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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
        <h1>Email: {form.email}</h1>
        <h1>Password: {form.password}</h1>
      </div>
    </div>
  );
};

export default Form;
