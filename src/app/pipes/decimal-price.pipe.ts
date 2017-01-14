import { Pipe, PipeTransform } from '@angular/core';
/*
 * Shows saved price 1050 saved as decimal 10.5
*/
@Pipe({ name: 'decimalPrice' })
export class DecimalPricePipe implements PipeTransform {
  transform(value: number): number {
    return value / 100;
  }
}