import React from 'react';
import { PropTypes } from 'prop-types';

const SelectInput = ({ name, label, options, defaultOption, onChange, placeHolder, value, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.lengh > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange} >
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })};
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  defaultOption: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;

