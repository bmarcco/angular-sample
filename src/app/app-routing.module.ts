import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PriceComponent } from './page/price/price.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'price', component:PriceComponent},
{path:'contact', component:ContactComponent},
{path:'users', component:UsersComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
