import { createSelector } from 'reselect';

const getSelectedOutcomeFromState = (state, props) => {
  return state.outcome.outcomes[props.outcomeId];
};

const getSelectedOutcomesEntityFromState = (state) =>
  state.outcome.outcomes;


export const getSelectedOutcome = createSelector(
  [getSelectedOutcomeFromState],
  (outcome) => {
    return outcome;
  }
);

export const getOutcomes = createSelector(
  [ getSelectedOutcomesEntityFromState],
  (outcomesEntity) => {
    return Object.keys(outcomesEntity).map((key)=>{
      return outcomesEntity[key];
    });
  }
);
