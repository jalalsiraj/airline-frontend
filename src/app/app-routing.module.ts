import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './auth/components/register-user/register-user.component';
import { LoginUserComponent } from './auth/components/login-user/login-user.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { HomeComponent } from './core/components/home/home.component';
import { BookTicketComponent } from './core/components/book-ticket/book-ticket.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/app/home' },
  { path: 'home', pathMatch: 'full', redirectTo: '/app/home' },
  { path: 'app', pathMatch: 'full', redirectTo: '/app/home' },
  {
    path: 'app', component: NavBarComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'book', component: BookTicketComponent }
    ]
  },
  { path: 'app/register', component: RegisterUserComponent },
  { path: 'app/login', component: LoginUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
