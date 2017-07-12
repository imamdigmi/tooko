import { Component } from '@angular/core';

@Component({
  selector: 'page-link',
  templateUrl: 'link.html'
})
export class LinkPage {
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
