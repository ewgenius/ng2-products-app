import 'hammerjs'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'products', component: AppComponent },
  { path: 'products/:id', component: AppComponent },
  { path: 'products/:id/edit', component: AppComponent },
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
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
