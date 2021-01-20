import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormPageComponent } from './components/user-form-page/user-form-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormRoutingModule } from './user-form-routing.module';

@NgModule({
  declarations: [UserFormPageComponent],
  imports: [CommonModule, UserFormRoutingModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class UserFormModule {}
