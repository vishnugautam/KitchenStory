import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ErrorComponent } from './error/error.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemComponent } from './item/item.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { OrderoverviewComponent } from './orderoverview/orderoverview.component';
import { SearcheditemsComponent } from './searcheditems/searcheditems.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  {path:'', component: LandingpageComponent},
  {path:'login', component: AdminloginComponent},
  {path:'home/:name', component: HomepageComponent, canActivate: [RouteGuardService]},
  {path: 'inventory', component: InventoryComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: AdminLogoutComponent, canActivate: [RouteGuardService]},
  {path: 'inventory/:id', component: ItemComponent, canActivate: [RouteGuardService]},
  {path: 'searcheditems/:foodname', component: SearcheditemsComponent},
  {path: 'overview/:id', component: OrderoverviewComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
