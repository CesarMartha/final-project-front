import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { ApiService } from '../api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    name = 'Angular';
    searchTerm: string;
    receiver: any[] = [];
    movies: any[] = [];
    pageNum: number = 1;
    
    constructor( public api: ApiService, private router: Router){}
  
    ngOnInit() {
        let token = sessionStorage.getItem('token');
        if (!token) {
            this.router.navigate(['/login'])
        }
        this.api.getMovieData(this.pageNum).subscribe(( res: any ) => {
            this.movies = res.results;
        })
        
    }
    
    
    pageClick(){
        this.pageNum++;
        this.api.getMovieData(this.pageNum).subscribe(( res : any ) =>{
            this.movies = this.movies.concat(res.results)
        })
    }
    

  
   onClick(){
    console.log("it ran");
    this.api.getMovieData(this.searchTerm).subscribe(( res: any ) => {
      this.movies = res.results;
    })
   }
   
   goToMovieDetails(movie){
     this.api.clickedOnMovie = movie
     this.router.navigate(['/movie-desc'])
   }

}
