import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

import {UserRequestService} from '../user-request.service';
import {User} from '../user';
import {Repository} from '../repository'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserServiceService,UserRequestService] 
})
export class UserComponent implements OnInit {

  user:User;
  repository:Repository[];

  userName=""
  constructor(private usersService:UserRequestService){
  
  }
  submitUser(){
         this.usersService.userRequest(this.userName)
         this.usersService.repositoryrequest(this.userName)
         
}
  ngOnInit() {
    
      this.usersService.userRequest('Winnyk15')
      this.usersService.repositoryrequest('Winnyk15')
           
      this.user=this.usersService.user
      this.repository=this.usersService.repository
      console.log(this.repository)
  }  
  }