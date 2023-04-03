import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { PriceComponent } from './page/price/price.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'price', component:PriceComponent},
{path:'project', component:ContactComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
