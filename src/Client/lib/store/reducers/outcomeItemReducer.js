import { outcomeItemConstants } from '../../constants/action-types';

const initialState = {
  outcomeItems: []
};
export default function OutcomeItemReducer(state = initialState, action) {
  switch (action.type) {
    case outcomeItemConstants.LOAD_OUTCOME_ITEMS_SUCCESS: {
      const outcomeItems = Object.assign([], action.outcomeItems);
      return { outcomeItems };
    }
    case outcomeItemConstants.CREATE_OUTCOME_ITEM_SUCCESS: {
      const outcomeItem = Object.assign({}, action.outcomeItem);
      return { outcomeItems: [...state].unshift(outcomeItem) };
    }
    case outcomeItemConstants.UPDATE_OUTCOME_ITEM_SUCCESS: {
      return {
        outcomeItems: [
          ...state.outcomeItems.filter((outcomeItem) => { return outcomeItem.id != action.outcomeItem.id; }),
          Object.assign({}, action.outcomeItem)]
      };
    }
    case outcomeItemConstants.DELETE_OUTCOME_ITEM_SUCCESS: {
      const resultOutcomeItems = state.outcomeItems.filter((outcomeItem) => {
        return outcomeItem.id !== action.outcomeItemId;
      });
      return { outcomeItems: [...resultOutcomeItems] };
    }
    default: {
      return state;
    }
  }
}