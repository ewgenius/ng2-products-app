import { Routes } from '@angular/router';

import { AuthorizedGuard } from './guards/authorized.guard'

import { AuthComponent } from './components/auth/auth.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthorizedGuard] },
  { path: 'products/:id', component: ProductComponent, canActivate: [AuthorizedGuard] },
  { path: 'products/:id/edit', component: FormComponent, canActivate: [AuthorizedGuard] },
  { path: '**', component: AuthComponent }
]