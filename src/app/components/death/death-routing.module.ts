import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeathComponent } from './death.component';
import { AuthGuard } from '../../shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: DeathComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeathRoutingModule { }
