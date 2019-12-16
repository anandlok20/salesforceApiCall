import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraineeComponent } from './trainee/trainee.component';


const routes: Routes = [
  {path:'trainee',component:TraineeComponent},
  {path:'',redirectTo:'/trainee',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
