import { Product } from 'src/app/model/Product.model';
import { Router } from '@angular/router';
import { HttpClientService } from './../../../services/http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: Array<Product>;
  productsRecieved: Array<Product>;
  orderProducts: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    let data = localStorage.getItem('order');
    if (data !== null) {
      this.orderProducts = JSON.parse(data);
    } else {
      this.orderProducts = [];
    }
  }
  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    this.productsRecieved = response;
    for (const product of this.productsRecieved) {

      const productwithRetrievedImageField = new Product();
      productwithRetrievedImageField.id = product.id;
      productwithRetrievedImageField.name = product.name;
      productwithRetrievedImageField.retrievedImage = 'data:image/png;base64,' + product.picByte;
      productwithRetrievedImageField.gender = product.gender;
      productwithRetrievedImageField.price = product.price;
      productwithRetrievedImageField.picByte = product.picByte;
      this.products.push(productwithRetrievedImageField);
    }
  }

  addToOrder(productId) {
    let product = this.products.find(product => {
      return product.id === +productId;
    });
    let orderData = [];
   
    let data = localStorage.getItem('order');
    
    if (data !== null) {
      orderData = JSON.parse(data);
    }
   
    orderData.push(product);
    
    this.updateOrderData(orderData);
    
    localStorage.setItem('order', JSON.stringify(orderData));
    
    product.isAdded = true;
  }

  updateOrderData(orderData) {
    this.orderProducts = orderData;
  }

  goToOrder() {
    this.router.navigate(['/order']);
  }

  emptyOrder() {
    this.orderProducts = [];
    localStorage.clear();
  }


}
