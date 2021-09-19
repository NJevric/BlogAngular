import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/apiPaths';
import { IBlog } from '../interfaces/i-blog';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends ApiService<IBlog> {
  
  constructor(public http: HttpClient) {
    super(apiPaths.posts, http);
  }
}
