import { Component, Input, OnInit } from '@angular/core';
import { brewery } from '../catalog.interface';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent implements OnInit {

  @Input()
  brewery: brewery;

  constructor() { }

  ngOnInit(): void {
    
  }

  goToBreweryWebsite() {
    window.location.href = this.brewery.website_url;
  }

}
