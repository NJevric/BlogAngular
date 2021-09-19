import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/apiPaths';
import { ITags } from '../interfaces/i-tags';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService extends ApiService<ITags> {

  constructor(public http: HttpClient) {
    super(apiPaths.tags, http);
  }
}
