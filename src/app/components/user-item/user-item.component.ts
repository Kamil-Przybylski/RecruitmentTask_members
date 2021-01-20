import { Component, Input, OnInit } from '@angular/core';
import { IUserWithProfile } from '../../core/interfaces/users.interfaces';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: IUserWithProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
