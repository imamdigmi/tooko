import { Component } from '@angular/core';

@Component({
  selector: 'page-akakomlink',
  templateUrl: 'akakomlink.html'
})
export class AkakomlinkPage {
  items = [
    'Siakad Portal',
    'Sikeu Portal',
    'PMB',
    'Sistem Informasi',
    'Teknik Infomatika'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
