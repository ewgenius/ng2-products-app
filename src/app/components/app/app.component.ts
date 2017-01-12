import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as root from '../../reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<root.State>) {}
}
