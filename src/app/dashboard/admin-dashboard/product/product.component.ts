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
productsRecieved: Array<Product>;
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
	const id = params['id'];
        if (id) {
          this.selectedProduct = this.products.find(product => {
            return product.id === +id;
          });
        }
      }
    );
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
      productwithRetrievedImageField.picByte=product.picByte;
      this.products.push(productwithRetrievedImageField);
    }
  }
  addProduct() {
    this.selectedProduct = new Product();
    this.router.navigate(['admin', 'products'], { queryParams: { action: 'add' } });
  }
  viewProduct(id: number) {
    this.router.navigate(['admin', 'products'], { queryParams: { id, action: 'view' } });
  }
}
