import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[];
  @Output() onSelect: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  selectProduct(id: number) {
    this.onSelect.emit(id);
  }

  editProduct(id: number) {
    this.onEdit.emit(id);
  }

  deleteProduct(id: number) {
    this.onDelete.emit(id);
  }
}
