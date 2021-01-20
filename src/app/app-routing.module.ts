import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './pages/users/containers/list/list.component';

const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersListComponent,
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./lazy-modules/user-form/user-form.module').then((m) => m.UserFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
