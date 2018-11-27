import axios from 'axios';
import HttpConnector from './httpConnector';
import { categoryUrl  } from '../constants/resource-url';

export default class outcomeCategoryService {
  constructor() {
    this.httpConnector = new HttpConnector();
  }

  getAll() {
    return this.httpConnector.get(categoryUrl);
  }

  save(category) {
    return this.httpConnector.post(categoryUrl, category);
  }

  delete(categoryId) {
    return this.httpConnector.delete(categoryUrl, categoryId);
  }
}