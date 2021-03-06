import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { DBSchema, DBModule } from '@ngrx/db';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from '@angular/material';

import { ProductEffects } from './effects/product';
import { AuthorizedGuard } from './guards/authorized.guard';
import { reducer } from './reducers';
import { routes } from './app.routes';
import { AppComponent } from './components/app/app.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DecimalPricePipe } from './pipes/decimal-price.pipe';

const schema: DBSchema = {
  version: 1,
  name: 'products_app',
  stores: {
    products: {
      autoIncrement: true,
      primaryKey: 'id'
    }
  }
};

@NgModule({
  entryComponents: [
    ProductDialogComponent
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    ProductsComponent,
    ProductComponent,
    ProductDialogComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductCardComponent,
    DecimalPricePipe
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    /**
     * Effects for saving all data in idb
     */
    EffectsModule.run(ProductEffects),
    DBModule.provideDB(schema)
  ],
  providers: [AuthorizedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
