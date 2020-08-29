import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service.service';

import {UserRequestService} from '../user-request.service';
import {User} from '../user';
import {Repository} from '../repository'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService,UserRequestService] 
})
export class UserComponent implements OnInit {

  user:User;
  repository:Repository[];

  userName=""

  constructor(private userService:UserRequestService) { 

  }

  submitUser(){
    this.userService.userRequest(this.userName)
    this.userService.repositoryrequest(this.userName) 

  ngOnInit(): void {

    this.userService.userRequest('')
      this.userService.repositoryrequest('Winnyk15')
           
      this.user=this.userService.user
      this.repository=this.userService.repository
      console.log(this.repository)
  }

}
