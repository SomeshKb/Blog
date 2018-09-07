import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitParagraph'})
export class limitParagraph implements PipeTransform {
  transform(value: string, sliceValue: number = 129): string {
        return value.slice(0,sliceValue)+"....";
  }
}
