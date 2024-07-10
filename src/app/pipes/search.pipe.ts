import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../interfaces/products';

@Pipe({
  name: 'searchpipe'
})
export class SearchPipe implements PipeTransform {

  transform(products: Iproduct[], searchKey:string): Iproduct[] {

return products.filter(product =>product.title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()));

  }
}
