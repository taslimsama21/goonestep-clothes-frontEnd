import { Order } from './../model/Order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

  constructor(private httpClient:HttpClient) { }

  getTotalOrders(){
    return this.httpClient.get<Order[]>('http://localhost:8080/api/admin/order/total');
  }

listOutApprovedOrders(orderId){
  return this.httpClient.get<Order[]>('http://localhost:8080/api/admin/order/approved'+orderId);
}
listOutRejectedOrders(orderId){
  return this.httpClient.get<Order>('http://localhost:8080/api/admin/order/rejected'+orderId);
}

approveOrder(orderData:Order){
  return this.httpClient.put('http://localhost:8080/api/admin/order/approve',orderData);
}
rejectOrder(orderData:Order){
  return this.httpClient.put('http://localhost:8080/api/admin/order/reject',orderData);
}
 listOrderPerUser(orderData){
  return this.httpClient.post('http://localhost:8080/api/admin/order/list/per/user',orderData);
}
}
