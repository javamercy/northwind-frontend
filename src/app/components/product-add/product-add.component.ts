import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(): void {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  add(): void {
    if (this.productAddForm.invalid)
      this.toastrService.error('Form Invalid', 'error');

    let productModel: Product = this.productAddForm.value as Product;
    this.productService.add(productModel).subscribe({
      next: (response) => {
        this.toastrService.success(response.message, 'success');
        console.log(response);
      },
      error: (responseError) => {
        console.log(responseError);

        let validationErrors = responseError.error.Errors;

        if (validationErrors) {
          validationErrors.forEach((error: { ErrorMessage: string }) => {
            this.toastrService.error(error.ErrorMessage, 'validation error');
          });
        }
      },
    });
  }
}
