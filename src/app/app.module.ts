import 'hammerjs'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@angular/material';

import {reducer} from './reducers'
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'products', component: AppComponent },
  { path: 'products/:id', component: AppComponent },
  { path: 'products/:id/edit', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
