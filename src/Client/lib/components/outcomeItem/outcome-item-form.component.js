import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../commons/text-Input';
import NumberInput from '../commons/number-Input';
import SelectInput from '../commons/select-input';
import DatePickerInput from '../commons/datePicker-input';
import TextAreaInput from '../commons/textarea-input';

const OutcomeItemForm= ({outcomeItem, categoryOptions, onSave, onChange, loading, errors, onDatePickerChange}) => {
  return (
    <form>
      <h1>Manage OutcomeItem</h1>
      <TextInput name="name" label="Name" value={outcomeItem.name} placeHolder="insert outcomeItem name" onChange={onChange} error={errors.title} />
      <SelectInput name="OutcomeCategoryId" label="Category" value={outcomeItem.OutcomeCategoryId ? outcomeItem.OutcomeCategoryId.toString() : ''} options={categoryOptions} defaultOption="select category" onChange={onChange}></SelectInput>
      <NumberInput name="amount" label="Amount" value={outcomeItem.amount} placeHolder="insert outcomeItem name" onChange={onChange} error={errors.title} />
      <DatePickerInput name="actionDate" label="Date" value={outcomeItem.actionDate} placeHolder="insert day" onChange={ (value) => onDatePickerChange('actionDate', value)  } error={errors.title} />
      <TextAreaInput name="description" label="Description" value={outcomeItem.description} placeHolder="insert description" onChange={onChange} error={errors.title} />
      <input type="button" disabled={loading} value={loading ? 'Saving' : 'Save'} onClick={onSave} className="btn btn-primary"></input>
    </form>
  );
};

OutcomeItemForm.propTypes = {
  outcomeItem: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object
};

export default OutcomeItemForm;