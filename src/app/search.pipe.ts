import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(Products: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return  [];
        }
       searchInput = searchInput.toLowerCase();
       return Products.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}