
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'convertToList'
})

export class ConvertToListPipe implements PipeTransform {
    transform(value: string) {

        let s = '<ul>';
        for (const v of value.split(',')) {
            s += '<li>' + v + '</li>';
        }
        return s + '</ul>';
    }

}
