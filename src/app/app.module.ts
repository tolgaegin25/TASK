import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { PricingComponent } from './pricing/pricing.component';
import { PricingAreaComponent } from './pricing-area/pricing-area.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, TableComponent, PricingComponent, PricingAreaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
