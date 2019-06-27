import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  
  favMovie: [] = []

  constructor( public api: ApiService, private router: Router ) { }

  ngOnInit() {
    let token = sessionStorage.getItem('token');
        if (!token) {
            this.router.navigate(['/login'])
        }
    // if (typeof favMovie[] === undefined) {
      
    // }
    this.favMovie = this.api.clickedOnMovie
  }

}
