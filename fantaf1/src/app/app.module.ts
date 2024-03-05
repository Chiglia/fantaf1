import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NavComponent } from './nav/nav.component';
import { DriversComponent } from './drivers/drivers.component';
import { GeneralComponent } from './general/general.component';
import { FooterComponent } from './footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'coffee', component: CoffeeComponent, title: 'Home details'},
  { path: 'details/:id', component: DetailsComponent, title: 'Home details'},
  { path: 'thanks', component: ThanksComponent, title: 'Home details'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavComponent,
    DriversComponent,
    GeneralComponent,
    FooterComponent,
    DetailsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    CookieService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
