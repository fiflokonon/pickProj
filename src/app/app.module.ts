import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { EnrolmentComponent } from './components/enrolment/enrolment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductadminComponent } from './components/productadmin/productadmin.component';
import { FormComponent } from './components/form/form.component';
import { ProdlistComponent } from './components/prodlist/prodlist.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { UserprofComponent } from './components/userprof/userprof.component';
import { UserdashComponent } from './components/userdash/userdash.component';
import { HeaderComponent } from './components/header/header.component';
import { AdmindashComponent } from './components/admindash/admindash.component';
import { CatlistComponent } from './components/catlist/catlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    EnrolmentComponent,
    ProductadminComponent,
    FormComponent,
    ProdlistComponent,
    ShoppingComponent,
    UserprofComponent,
    UserdashComponent,
    UserinfoComponent,
    HeaderComponent,
    AdmindashComponent,
    CatlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
