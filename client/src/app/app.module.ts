import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./routes/login/login.component";
import { DashboardComponent } from "./routes/dashboard/dashboard.component";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";
import { NavComponent } from "./routes/nav/nav.component";
import { DriversComponent } from "./routes/drivers/drivers.component";
import { GeneralComponent } from "./routes/general/general.component";
import { FooterComponent } from "./routes/footer/footer.component";
import { CookieService } from "ngx-cookie-service";
import { DetailsComponent } from "./routes/details/details.component";
import { RegisterComponent } from "./routes/register/register.component";
import { CoffeeComponent } from "./routes/coffee/coffee.component";
import { ThanksComponent } from "./routes/thanks/thanks.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "coffee", component: CoffeeComponent, title: "Home details" },
  { path: "details/:id", component: DetailsComponent, title: "Home details" },
  { path: "thanks", component: ThanksComponent, title: "Home details" },
  { path: "**", redirectTo: "/dashboard" },
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
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, CookieService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
