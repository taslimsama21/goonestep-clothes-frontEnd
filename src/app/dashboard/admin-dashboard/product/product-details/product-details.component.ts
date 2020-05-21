import { Router } from '@angular/router';
import { HttpClientService } from './../../../../services/http-client.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/Product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  product: Product;
  @Output()
  productDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }
  deleteProduct() {
    this.httpClientService.deleteProduct(this.product.id).subscribe(
      (product) => {
        this.productDeletedEvent.emit();
        this.router.navigate(['admin', 'products']);
      }
    );
  }
  editProduct() {
    this.router.navigate(['admin', 'products'], { queryParams: { action: 'edit', id: this.product.id } });
  }
}
