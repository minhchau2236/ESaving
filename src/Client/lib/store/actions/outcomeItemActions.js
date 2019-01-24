import { outcomeItemConstants } from '../../constants/action-types';
import OutcomeItemService from '../../services/outcomeItem.service';
const outcomeItemService = new OutcomeItemService();

export function addOutcomeItem(outcomeItem) {
  return { type: outcomeItemConstants.ADD_OUTCOME_ITEM_SUCCESS, outcomeItem };
} 

export function loadOutcomeItemsSuccess(outcomeItems) {
  return { type: outcomeItemConstants.LOAD_OUTCOME_ITEMS_SUCCESS, outcomeItems };
} 

export function createOutcomeItemSuccess(outcomeItem) {
  return { type: outcomeItemConstants.CREATE_OUTCOME_ITEM_SUCCESS, outcomeItem };
} 

export function deleteOutcomeItemSuccess(id) {
  return { type: outcomeItemConstants.DELETE_OUTCOME_ITEM_SUCCESS, outcomeItemId: id };
} 

export function updateOutcomeItemSuccess(outcomeItem) {
  return { type: outcomeItemConstants.UPDATE_OUTCOME_ITEM_SUCCESS, outcomeItem };
} 

export function loadOutcomeItems() {
  return function(dispatch) {
    outcomeItemService.getAll().then((outcomeItems) => {
      dispatch(loadOutcomeItemsSuccess(outcomeItems));
    }).catch((error)=>{
      throw(error);
    });
  };
}

export function loadOutcomeItemsByOutcomeId(outcomeId) {
  return function(dispatch) {
    outcomeItemService.getByOutcomeId(outcomeId).then((outcomes) => {
      dispatch(loadOutcomeItemsSuccess(outcomes));
    }).catch((error)=>{
      throw(error);
    });
  };
}

export function saveOutcomeItem(outcomeItem) {
  return function(dispatch) {
    outcomeItemService.save(outcomeItem).then((savedOutcomeItem) => {
      if(!savedOutcomeItem.id) {
        dispatch(createOutcomeItemSuccess(savedOutcomeItem));
      } else {
        dispatch(updateOutcomeItemSuccess(savedOutcomeItem));
      }
    }).catch((error)=> {
      throw(error);
    });
  };
}

export function deleteOutcomeItem(id) {
  return function(dispatch) {
    outcomeItemService.delete(id).then(() => {
      dispatch(deleteOutcomeItemSuccess(id));
    }).catch((error)=>{
      throw(error);
    });
  };
}
