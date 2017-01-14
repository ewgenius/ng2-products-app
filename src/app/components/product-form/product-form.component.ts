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
    this.save.emit({
      id: this.product ? this.product.id : '',
      name: this.model.name,
      price: this.model.price * 100,
      created: this.product ? this.product.created : new Date().toString(),
    });
  }
}
