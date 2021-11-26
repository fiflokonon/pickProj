import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { CatlistComponent } from './components/catlist/catlist.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EnrolmentComponent } from './components/enrolment/enrolment.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProdlistComponent } from './components/prodlist/prodlist.component';
import { ProductadminComponent } from './components/productadmin/productadmin.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { UserdashComponent } from './components/userdash/userdash.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UserprofComponent } from './components/userprof/userprof.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'inscription', component:EnrolmentComponent },
  {path:'head', component: HeaderComponent, 
  children:[
    
  ]},
  {path:'adminpage', component: ProductadminComponent},
  {path:'form', component:FormComponent},
  {path:'produits', component: ProdlistComponent},
  {path:'panier', component: ShoppingComponent},
  {path:'profile', component: UserprofComponent},
  {path:'dashboard', component: UserdashComponent},
  {path:'userinfo', component: UserinfoComponent},
  {path:'admindash', component: AdmindashComponent},
  {path: 'admincat', component: CatlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
