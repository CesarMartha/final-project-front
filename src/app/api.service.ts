import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  clickedOnMovie: any;
  
  constructor(public http: HttpClient, private router: Router ) {}
    
    getMovieData(querry){
      return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=151553c526d7182056b1dcaa3e220379&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${querry}`)
    }
   
    userForm = {
      firstName: '',// <input [(ngModel)] = 'userForm.firstName' >
      lastName: '',
      email: '',
      password: ''
    }
    baseUrl = 'http://meanstack-2019-3-cesar-phortonssf.c9users.io:8080/api';
    registerUser() {
      this.http.post(`${this.baseUrl}/appUsers`,this.userForm).subscribe((res: any) => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.userId);
        this.router.navigate([`/home`]);
        console.log(res)
      })
    }
    
    loginUser() {
      this.http.post(`${this.baseUrl}/appUsers/login`,this.userForm).subscribe((res: any) => {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userId', res.userId);
        this.router.navigate([`/home`]);
        console.log(res)
      })
    }
    
    addFavorites(userId) {
      let token = sessionStorage.getItem("token")
      console.log("token", token)
      this.http.get(`${this.baseUrl}/appUsers/${userId}/favorites?access_token=${token}`)
      .subscribe(
      res => console.log("res", res))
    }
    
    
}
// https://api.themoviedb.org/3/search/movie?api_key=151553c526d7182056b1dcaa3e220379&language=en-US&query=${querry}&page=1&include_adult=false