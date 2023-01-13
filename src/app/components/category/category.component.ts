import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  currentCategory: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.categoryService.getAll().subscribe({
      next: (response) => (this.categories = response.data),

      error: (err) => console.error(err),
    });
  }

  setCurrentCategory(category: Category): void {
    this.currentCategory = category;
  }


  isCurrentCategory(category: Category) {
    return category == this.currentCategory;
  }
}
