import axios from 'axios';
import HttpConnector from './httpConnector';
import { outcomeUrl  } from '../constants/resource-url';

export default class outcomeService {
  constructor() {
    this.httpConnector = new HttpConnector();
  }

  getAll() {
    return this.httpConnector.get(outcomeUrl);
  }

  getById(id) {
    return this.httpConnector.get(`${outcomeUrl}/${id}`);
  }

  save(outcome) {
    return this.httpConnector.post(outcomeUrl, outcome);
  }

  delete(outcomeId) {
    return this.httpConnector.delete(outcomeUrl, outcomeId);
  }
}