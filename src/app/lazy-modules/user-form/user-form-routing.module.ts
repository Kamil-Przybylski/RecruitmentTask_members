import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormPageComponent } from './components/user-form-page/user-form-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new',
    pathMatch: 'full'
  },
  {
    path: 'new',
    pathMatch: 'full',
    component: UserFormPageComponent,
  },
  {
    path: 'edit/:id',
    pathMatch: 'full',
    component: UserFormPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFormRoutingModule {}
