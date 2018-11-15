import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../commons/text-Input';


const OutcomeItemForm= ({category, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Category</h1>
      <TextInput name="name" label="Name" value={category.name} placeHolder="insert category name" onChange={onChange} error={errors.title} />
      <input type="button" disabled={loading} value={loading ? 'Saving' : 'Save'} onClick={onSave} className="btn btn-primary"></input>
    </form>
  );
};

OutcomeItemForm.propTypes = {
  category: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object
};

export default OutcomeItemForm;