import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../commons/text-Input';
import NumberInput from '../commons/number-Input';
import SelectInput from '../commons/select-input';
import DatePickerInput from '../commons/datePicker-input';
import TextAreaInput from '../commons/textarea-input';

const OutcomeForm= ({outcome, onSave, onChange, loading, errors, onDatePickerChange}) => {
  return (
    <form>
      <h1>Manage Outcome</h1>
      <TextInput name="name" label="Name" value={outcome.name} placeHolder="insert outcome name" onChange={onChange} error={errors.title} />
      <DatePickerInput name="actionDate" label="Date" value={outcome.actionDate} placeHolder="insert day" onChange={ (value) => onDatePickerChange('actionDate', value)  } error={errors.title} />
      <TextAreaInput name="description" label="Description" value={outcome.description} placeHolder="insert description" onChange={onChange} error={errors.title} />
      <input type="button" disabled={loading} value={loading ? 'Saving' : 'Save'} onClick={onSave} className="btn btn-primary"></input>
    </form>
  );
};

OutcomeForm.propTypes = {
  outcome: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object
};

export default OutcomeForm;