import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { RequestLoginComponent } from './components/request-login/request-login.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-auth', component: UserAuthComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'request-login', component: RequestLoginComponent },
  { path: 'wishlist', component: WishListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
