import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], filterText: string): Product[] {
    return filterText
      ? products.filter(
          (p: Product) =>
            p.productName
              .toLocaleLowerCase()
              .indexOf(filterText.toLocaleLowerCase()) !== -1
        )
      : products;
  }
}
