import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployessRoutes } from './routes/employees.routes';
import { DepartmentsRoutes } from './routes/departments.routes';
import { TasksRoutes } from './routes/tasks.routes';
import { AdminRoutes } from './routes/admin.routes';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {
    path: 'employees',  children: EmployessRoutes
  },

  {
    path: 'departments',  children: DepartmentsRoutes
  },

  {
    path: 'tasks',  children: TasksRoutes
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
