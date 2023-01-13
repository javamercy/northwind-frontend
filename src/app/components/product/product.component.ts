import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: boolean = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
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

  getAll() {
    this.productService.getAll().subscribe({
      next: (response) => {
        this.products = response.data;
        this.dataLoaded = true;
      },
    });
  }

  getAllByCategoryId(categoryId: number) {
    this.productService.getAllByCategoryId(categoryId).subscribe({
      next: (response) => {
        this.products = response.data;
        this.dataLoaded = true;
      },

      error: (err) => console.error(err),
    });
  }
}
