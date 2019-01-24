import { outcomeConstants } from '../../constants/action-types';

const initialState = {
  outcomes: {},
  selectedOutcome: {}
};

export default function OutcomeReducer(state = initialState, action) {
  switch (action.type) {
    case outcomeConstants.LOAD_OUTCOMES_SUCCESS: {
      let outcomes = action.outcomes.reduce((accumlator, currentValue) => {
        accumlator[currentValue.id] = currentValue;
        return accumlator;
      }, {});
      return { ...state, outcomes };
    }
    case outcomeConstants.LOAD_OUTCOME_SUCCESS: {
      const outcome = action.outcome;
      let outcomes = _.cloneDeep(state.outcomes);
      outcomes[outcome.id] = outcome;
      return { ...state, outcomes};
    }
    case outcomeConstants.CREATE_OUTCOME_SUCCESS: {
      const outcome = Object.assign({}, action.outcome);
      state.outcomes[outcome.id] = outcome;
      const newOutcomes = _.cloneDeep(state.outcomes);
      return { ...state, outcomes: newOutcomes };
    }
    case outcomeConstants.UPDATE_OUTCOME_SUCCESS: {
      return {
        ...state,
        outcomes: [
          ...state.outcomes.filter((outcome) => { return outcome.id != action.outcome.id; }),
          Object.assign({}, action.outcome)]
      };
    }
    case outcomeConstants.DELETE_OUTCOME_SUCCESS: {
      const resultOutcomes = state.outcomes.filter((outcome) => {
        return outcome.id !== action.outcomeId;
      });
      return {
        ...state,
        outcomes: [...resultOutcomes]
      };
    }
    default: {
      return state;
    }
  }
}