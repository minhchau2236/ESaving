import React from 'react';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-datepicker';

const DatePickerInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.lengh > 0) {
    wrapperClass += ' has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <DatePicker name={name} selected={value} onChange={onChange} placeholderText={placeHolder} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

DatePickerInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.number,
  error: PropTypes.string
};

export default DatePickerInput;

