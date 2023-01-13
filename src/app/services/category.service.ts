import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private API_URL: string = 'https://localhost:44311/api';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Category>> {
    let newUrl: string = this.API_URL + '/categories/getall';

    return this.httpClient.get<ListResponseModel<Category>>(newUrl);
  }
}
