import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/list-response-model';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL: string = 'https://localhost:44311/api';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {

    let newUrl: string = this.API_URL + '/products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }
}
