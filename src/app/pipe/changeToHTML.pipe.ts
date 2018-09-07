import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limitParagraph'})
export class limitParagraph implements PipeTransform {
  transform(value: string ): void {
    // TODO create a pipe for converting HTML to Text Format 
}
}