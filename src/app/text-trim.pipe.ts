import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrim'
})
export class TextTrimPipe implements PipeTransform {

  transform(value: string) {
    if(value.length>50){
      return value.substr(0,50) + "...";
    }
    return value;
  }

}
