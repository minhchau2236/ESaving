import axios from 'axios';
import HttpConnector from './httpConnector';
import { outcomeItemUrl, outcomeItemByOutcomeUrl  } from '../constants/resource-url';

export default class outcomeItemService {
  constructor() {
    this.httpConnector = new HttpConnector();
  }

  getAll() {
    return this.httpConnector.get(outcomeItemUrl);
  }

  getByOutcomeId(outcomeId) {
    return this.httpConnector.get(`${outcomeItemByOutcomeUrl}/${outcomeId}`);
  }

  save(outcomeItem) {
    return this.httpConnector.post(outcomeItemUrl, outcomeItem);
  }

  delete(outcomeItemId) {
    return this.httpConnector.delete(outcomeItemUrl, outcomeItemId);
  }
}