import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/apiPaths';
import { ICategories } from '../interfaces/i-categories';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<ICategories> {

  constructor(public http: HttpClient) {
    super(apiPaths.categories, http);
  }
}
