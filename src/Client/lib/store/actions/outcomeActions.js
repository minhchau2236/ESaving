import { outcomeConstants } from '../../constants/action-types';
import OutcomeService from '../../services/outcome.service';
const outcomeService = new OutcomeService();

export function addOutcome(outcome) {
  return { type: outcomeConstants.ADD_OUTCOME_SUCCESS, outcome };
} 

export function loadOutcomesSuccess(outcomes) {
  return { type: outcomeConstants.LOAD_OUTCOMES_SUCCESS, outcomes };
} 

export function loadOutcomeSuccess(outcome) {
  return { type: outcomeConstants.LOAD_OUTCOME_SUCCESS, outcome };
} 

export function getSelectedOutcomeSuccess(outcome) {
  return { type: outcomeConstants.LOAD_OUTCOME_SUCCESS, outcome };
}

export function createOutcomeSuccess(outcome) {
  return { type: outcomeConstants.CREATE_OUTCOME_SUCCESS, outcome };
} 

export function deleteOutcomeSuccess(id) {
  return { type: outcomeConstants.DELETE_OUTCOME_SUCCESS, outcomeId: id };
} 

export function updateOutcomeSuccess(outcome) {
  return { type: outcomeConstants.UPDATE_OUTCOME_SUCCESS, outcome };
} 

export function loadOutcomes() {
  return function(dispatch) {
    outcomeService.getAll().then((outcomes) => {
      dispatch(loadOutcomesSuccess(outcomes));
    }).catch((error)=>{
      throw(error);
    });
  };
}

export function getOutcomeById(id) {
  return function(dispatch) {
    outcomeService.getById(id).then((outcome) => {
      dispatch(getSelectedOutcomeSuccess(outcome));
    }).catch((error)=>{
      throw(error);
    });
  };
}

export function saveOutcome(outcome) {
  return function(dispatch) {
    outcomeService.save(outcome).then((savedOutcome) => {
      if(!savedOutcome.id) {
        dispatch(createOutcomeSuccess(savedOutcome));
      } else {
        dispatch(updateOutcomeSuccess(savedOutcome));
      }
    }).catch((error)=> {
      throw(error);
    });
  };
}

export function deleteOutcome(id) {
  return function(dispatch) {
    outcomeService.delete(id).then(() => {
      dispatch(deleteOutcomeSuccess(id));
    }).catch((error)=>{
      throw(error);
    });
  };
}
