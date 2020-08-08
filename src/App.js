import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Form from "./components/ModularForm/Form";
import FormElement from "./components/ModularForm/FormElement";
import Nav from "./components/Nav/Nav";

function App() {
  const [form, updateForm] = useState({});

  const modifyForm = (e) => {
    if (e.target.type === "checkbox") {
      updateForm({ ...form, [e.target.name]: e.target.checked });
    } else {
      updateForm({ ...form, [e.target.name]: e.target.value });
    }
    console.log(form);
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <h1>Hello From Home</h1>
          </Route>
          <Route exact path="/about">
            <h1>Hello From About</h1>
          </Route>

          <Route exact path="/contact">
            <Form>
              <FormElement
                label={"Email"}
                type={"email"}
                placeholder={"Enter email here.."}
                modifyForm={modifyForm}
              />
              <FormElement
                label={"Password"}
                type={"password"}
                placeholder={"Enter password here.."}
                modifyForm={modifyForm}
              />
              <FormElement
                label={"Checkbox"}
                type={"checkbox"}
                modifyForm={modifyForm}
              />
            </Form>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
