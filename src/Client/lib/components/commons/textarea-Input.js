import React from 'react';
import { PropTypes } from 'prop-types';

const TextAreaInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.lengh > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <textarea
          rows="4"
          cols="50"
          name={name}
          className="form-control"
          value={value}
          placeholder={placeHolder}
          onChange={onChange} />
      </div>
    </div>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextAreaInput;

