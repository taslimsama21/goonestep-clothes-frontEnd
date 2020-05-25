import { Order } from './../model/Order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

  constructor(private httpClient:HttpClient) { }

  getMyAllOrders() {
    return this.httpClient.get<Order[]>('http://localhost:8080/api/user/order/list');
  }

  addNewOrder(newOrder:Order){
    return this.httpClient.post<Order>('http://localhost:8080/api//user/order/new', newOrder);
  }
  
  editOrder(editedOrder:Order){
    return this.httpClient.put<Order>('http://localhost:8080/api/user/order/edit',editedOrder);
  }
  cancelOrder(orderId){
      return this.httpClient.put<Order>('http://localhost:8080/api/user/order/cancel', orderId);
  }

  getMyCanceledOrders(orderId){
    return this.httpClient.get<Order>('http://localhost:8080/api/user/order/canceled'+orderId);
  }

  getMyApprovedOrders(orderId){
    return this.httpClient.get<Order>('http://localhost:8080/api/user/order/approved'+orderId);
  }
  getMyRejectedOrders(orderId){
    return this.httpClient.get<Order>('http://localhost:8080/api/user/order/rejected'+orderId);
  }
  getOrderDetails(orderId){
    return this.httpClient.get<Order>('http://localhost:8080/api/user/order/details'+orderId);
  }

}
