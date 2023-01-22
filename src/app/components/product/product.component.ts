import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  dataLoaded: boolean = false;
  filterText: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getAllByCategoryId(params['categoryId']);
      } else {
        this.getAll();
      }
    });
  }

  getAll(): void {
    this.productService.getAll().subscribe({
      next: (response) => {
        this.products = response.data;
        this.dataLoaded = true;
      },
    });
  }

  getAllByCategoryId(categoryId: number): void {
    this.productService.getAllByCategoryId(categoryId).subscribe({
      next: (response) => {
        this.products = response.data;
        this.dataLoaded = true;
      },

      error: (err) => console.error(err),
    });
  }

  addToCart(product: Product): void {
    this.toastr.success('Added to Cart : ' + product.productName, 'Cart');
    this.cartService.addToCart(product);
  }
}
