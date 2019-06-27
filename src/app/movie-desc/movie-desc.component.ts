import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'

@Component({
  selector: 'app-movie-desc',
  templateUrl: './movie-desc.component.html',
  styleUrls: ['./movie-desc.component.scss']
})
export class MovieDescComponent implements OnInit {


  movie: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.movie = this.api.clickedOnMovie
  }

}
