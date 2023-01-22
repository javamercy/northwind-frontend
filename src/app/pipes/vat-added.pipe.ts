import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'vatAdded',
})
export class VatAddedPipe implements PipeTransform {
  transform(unitPrice: number, rate: number): number {
    return unitPrice + (unitPrice * rate) / 100;
  }
}
