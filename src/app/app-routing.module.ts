import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/app/login/login.component';
import { CustomerRoutes } from './routes/customer.routes';
import { AdminRoutes } from './routes/admin.routes';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
    path: 'customers',  children: CustomerRoutes
  },

  {
    path: 'admin',  children: AdminRoutes
  },

  { path: 'login', component: LoginComponent},

  { path: '**', redirectTo: 'login', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
