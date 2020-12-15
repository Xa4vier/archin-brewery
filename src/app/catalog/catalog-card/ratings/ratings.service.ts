import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {


  ratings: {name: string, rating: number}[];

  constructor() { }

  init() {
    this.ratings = JSON.parse(localStorage.getItem('userData'))

    if(this.ratings == null) {
      this.ratings = [];
    }
  }

  setRating(name: string, rating: number): void {
    this.ratings.push({
      name: name,
      rating: rating
    })

    localStorage.setItem('userData', JSON.stringify(this.ratings));
  }

  getRating(name: string): number {
    let ratingToReturn = 0;
    
    try {
       ratingToReturn = this.ratings.find(item => item.name == name).rating;
    } 
    catch {

    }

    return ratingToReturn;
  }


}
