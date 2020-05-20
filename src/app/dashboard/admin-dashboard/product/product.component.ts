import { HttpClientService } from './../../../services/http-client.service';
import { Product } from './../../../model/Product.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products: Array<Product>;
selectedProduct: Product;
action: string;

  constructor(private httpClientService: HttpClientService,private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshData();
  }
  
  refreshData() {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    this.activedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
      }
    );
  }
  handleSuccessfulResponse(response) {
    this.products = response;
  }
  addProduct() {
    this.selectedProduct = new Product();
    this.router.navigate(['admin', 'products'], { queryParams: { action: 'add' } });
  }
}
