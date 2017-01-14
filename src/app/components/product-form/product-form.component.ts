import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnChanges {
  @Input() product: Product;
  @Output() save: EventEmitter<Product> = new EventEmitter<Product>();

  private model: {
    name: string;
    price: number;
  } = {
    name: '',
    price: 0
  };

  constructor() { }

  ngOnChanges() {
    if (this.product) {
      this.model.name = this.product.name;
      this.model.price = this.product.price / 100;
    }
  }

  onSave() {
    const record: Product = {
      name: this.model.name,
      price: this.model.price * 100,
      created: this.product ? this.product.created : new Date().toString(),
    };
    if (this.product) {
      record.id = this.product.id;
    } else {
      /* 
       * it is workaround: ngrx.db does not provide id of inserted item,
       * so we need to generate id manually
       */
      record.id = (Number(localStorage.getItem('lastId')) || 0) + 1;
      localStorage.setItem('lastId', String(record.id));
    }
    this.save.emit(record);
  }
}
