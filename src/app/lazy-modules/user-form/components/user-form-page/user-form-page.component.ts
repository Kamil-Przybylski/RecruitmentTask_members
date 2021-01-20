import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { IUser } from '../../../../core/interfaces/users.interfaces';
import { GetUsers } from '../../../../state/state.actions';
import { State } from '../../../../state/state.reducers';
import { getUsers } from '../../../../state/state.selectors';

export function prowlyValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (typeof control.value !== 'string') {
      return { badFormat: { value: control.value } };
    }
    if (control.value.endsWith('prowly.com')) {
      return { prowlyDomain: { value: control.value } };
    }

    return null;
  };
}

export function plusValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (typeof control.value !== 'string') {
      return { badFormat: { value: control.value } };
    }
    if (control.value.includes('+')) {
      return { inclidePlus: { value: control.value } };
    }
    return null;
  };
}

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.scss'],
})
export class UserFormPageComponent implements OnInit, OnDestroy {
  users$ = this.store.pipe(select(getUsers));
  destroyed$: Subject<boolean> = new Subject<boolean>();

  id: number | null;
  form: FormGroup;
  // IUser rozni sie od formularza
  formValue: any;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(GetUsers());

    this.createForm();
    this.findUser();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

  private createForm() {
    this.form = this.fb.group({
      parentUserId: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        prowlyValidator(),
        plusValidator(),
      ]),
    });
  }

  private updateForm(user: IUser) {
    // brakuje parentUserId w IUser
    this.form.patchValue(user);
  }

  private findUser() {
    if (!Number.isInteger(this.id)) return;

    this.users$
      .pipe(
        takeUntil(this.destroyed$),
        filter((users) => users?.length > 0),
        // IUser ma user.id jako "number", natomiast zwracany jest "string"
        map((users) => users.find((user) => +user.id === this.id)),
        filter((user) => !!user),
        tap((user) => this.updateForm(user)),
      )
      .subscribe();
  }

  showValue() {
    if (this.form.valid) {
      this.formValue = this.form.value;
    } else {
      this.formValue = null;
    }
  }
}
