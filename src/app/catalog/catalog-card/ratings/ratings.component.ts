import { Component, Input, OnInit } from '@angular/core';
import { RatingsService } from './ratings.service';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  rating = 0;

  @Input()
  name: string;

  constructor(
    private ratingService: RatingsService
  ) { }

  ngOnInit(): void {
    this.getRating();
  }

  onSetRating(rating: number) {
    this.rating = rating;

    this.ratingService.setRating(this.name, rating);
  }

  getRating() {
    this.rating = this.ratingService.getRating(this.name);
  }

}
