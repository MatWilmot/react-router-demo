import React, { useState } from "react";

const Form = (props) => {
  return (
    <div>
      <div className="container">
        <form>{props.children}</form>
      </div>
    </div>
  );
};

export default Form;
