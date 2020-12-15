import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RatingsService } from './catalog-card/ratings/ratings.service';
import { brewery } from './catalog.interface';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  breweries: brewery[] = [];

  breweriesSub: Subscription;

  constructor(
    private catalogService: CatalogService,
    private ratingService: RatingsService
  ) { }

  ngOnInit(): void {

    this.ratingService.init();

    this.breweriesSub = this.catalogService.breweriesEvent.subscribe(breweries => {
      this.breweries = breweries;
    })

    this.catalogService.getAllBreweries();

  }

  ngOnDestroy(): void {
    this.breweriesSub.unsubscribe();
  }

}
