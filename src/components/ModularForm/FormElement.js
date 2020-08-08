import React from "react";
import PropTypes from "prop-types";

const FormElement = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.label}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.modifyForm}
      />
    </div>
  );
};

FormElement.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormElement;
