import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL: string = 'https://localhost:44311/api';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Product>> {
    let newUrl: string = this.API_URL + '/products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }

  getAllByCategoryId(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newUrl: string =
      this.API_URL + '/products/getallbycategoryid?categoryid=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }
}
