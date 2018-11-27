import axios from 'axios';
import HttpConnector from './httpConnector';
import { outcomeItemUrl  } from '../constants/resource-url';

export default class outcomeItemService {
  constructor() {
    this.httpConnector = new HttpConnector();
  }

  getAll() {
    return this.httpConnector.get(outcomeItemUrl);
  }

  save(outcomeItem) {
    return this.httpConnector.post(outcomeItemUrl, outcomeItem);
  }

  delete(outcomeItemId) {
    return this.httpConnector.delete(outcomeItemUrl, outcomeItemId);
  }
}