import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'myPipe'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}

@Pipe({
  name: 'splitOrder'
})
export class SplitPipe implements PipeTransform {
  transform(val:string, params:string[]):string {
    return val.split('ORDER_')[1];
  }
}


@Pipe({
  name: 'filterOrder'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.order.orderId.toLowerCase().includes(searchText);
    });
  }
}
