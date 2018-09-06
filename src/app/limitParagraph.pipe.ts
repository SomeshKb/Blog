import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitParagraph'})
export class limitParagraph implements PipeTransform {
  transform(value: string ): string {
        return value.slice(0,39);
  }
}