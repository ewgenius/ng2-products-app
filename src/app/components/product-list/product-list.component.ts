import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[];
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  selectProduct(id: string) {
    this.onSelect.emit(id);
  }

  editProduct(id: string) {
    this.onEdit.emit(id);
  }
}
