import { Product } from './../model/Product.model';
import { User } from './../model/User.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }
  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/api/user/list');
  }
  getProducts() {
    return this.httpClient.get<Product[]>('http://localhost:8080/api/product/list');
  }
  addProduct(newProduct: Product) {
    return this.httpClient.post<Product>('http://localhost:8080/api/product/add', newProduct);
  }
  
  deleteProduct(id) {
    return this.httpClient.delete<Product>('http://localhost:8080/api/product/' + id);
  }
}
