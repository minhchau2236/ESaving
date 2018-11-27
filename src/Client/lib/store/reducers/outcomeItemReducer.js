import { outcomeItemConstants } from '../../constants/action-types';
export default function OutcomeItemReducer(state = [
], action) {
  switch (action.type) {
    // case ADD_OUTCOME_ITEM_SUCCESS: {    
    //   return [...state, Object.assign({}, action.outcomeItem)];
    // }
    case outcomeItemConstants.LOAD_OUTCOME_ITEMS_SUCCESS: {
      const outcomeItems = Object.assign([], action.outcomeItems);
      return outcomeItems;
    }
    case outcomeItemConstants.CREATE_OUTCOME_ITEM_SUCCESS: {
      const outcomeItem = Object.assign({}, action.outcomeItem);
      return [...state, outcomeItem];
    }
    case outcomeItemConstants.UPDATE_OUTCOME_ITEM_SUCCESS: {
      return [
        ...state.filter((outcomeItem) => { return outcomeItem.id != action.outcomeItem.id; }),
        Object.assign({}, action.outcomeItem)];
    }
    case outcomeItemConstants.DELETE_OUTCOME_ITEM_SUCCESS: {
      const resultOutcomeItems = state.filter((outcomeItem) => {
        return outcomeItem.id !== action.outcomeItemId;
      });
      return [...resultOutcomeItems];
    }
    default: {
      return state;
    }
  }
}