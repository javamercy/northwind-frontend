import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  product1: any = { productId: 1, productName: 'Bardak', unitPrice: '25' };
  product2: any = { productId: 2, productName: 'Laptop', unitPrice: '25' };
  product3: any = { productId: 3, productName: 'Mouse', unitPrice: '25' };
  product4: any = { productId: 4, productName: 'Keyboard', unitPrice: '25' };
  product5: any = { productId: 5, productName: 'Camera', unitPrice: '25' };

  products: any[] = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
}
