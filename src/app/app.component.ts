import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http/'
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent  {
  
  
  
    constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {}
  
  user:any = {
    name : "",
    password : ""
  }
  alert(){
    alert(`${this.user.name} is ${this.user.password}`);
  }
  
  userLogout() {
    sessionStorage.clear()
    this.router.navigate(['/login'])
  }
  
  onClick() {
    this.http.post (`http://meanstack-2019-3-cesar-phortonssf.c9users.io:8080/api/appUsers`, {
      "firstName": "Richie",
      "lastName": "Rich",
      "email": "Richie@Rich.com",
      "password": "softy"
    })
  
  }
}
