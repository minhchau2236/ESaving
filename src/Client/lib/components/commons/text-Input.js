import React from 'react';
import { PropTypes } from 'prop-types';

const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.lengh > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange} ></input>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
