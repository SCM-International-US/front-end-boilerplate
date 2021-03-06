import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent} from './Products/products.component';
import { ContactComponent } from './Contact/contact.component';
import { AboutComponent} from './About/about.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
