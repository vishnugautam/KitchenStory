import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SearcheditemsComponent } from './searcheditems/searcheditems.component';
import { OrderoverviewComponent } from './orderoverview/orderoverview.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminloginComponent,
    InventoryComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    AdminLogoutComponent,
    ItemComponent,
    LandingpageComponent,
    SearcheditemsComponent,
    OrderoverviewComponent,
    CheckoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
