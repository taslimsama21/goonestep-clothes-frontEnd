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
  cartProducts: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
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

  addToCart(productId) {
    let product = this.products.find(product => {
      return product.id === +productId;
    });
    let cartData = [];
   
    let data = localStorage.getItem('cart');
    
    if (data !== null) {
      cartData = JSON.parse(data);
    }
   
    cartData.push(product);
    
    this.updateCartData(cartData);
    
    localStorage.setItem('cart', JSON.stringify(cartData));
    
    product.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartProducts = cartData;
  }

  // goToCart() {
  //   this.router.navigate(['/cart']);
  // }

  // emptyCart() {
  //   this.cartProducts = [];
  //   localStorage.clear();
  // }


}
