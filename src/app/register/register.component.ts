import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  ngOnInit() {}
  userInfo : [] = []
  constructor( public api: ApiService ){}
  onClick (){
    this.api.registerUser()
  }
}
