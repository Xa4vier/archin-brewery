import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http-service.service';
import { brewery } from './catalog.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  breweriesEvent: EventEmitter<brewery[]> = new EventEmitter(null)

  constructor(
    private httpService: HttpService
  ) { }

  public getAllBreweries() {
    this.httpService.get<brewery[]>('/breweries').subscribe(breweriesFromServer => {
      this.breweriesEvent.next(breweriesFromServer);
    });
  }

  public getBrewerieFilterByName(name: string) {
    this.getBrewerieWithFilter(`by_name=${name}`);
  }

  private getBrewerieWithFilter(filter: string) {
    
    this.httpService.get<brewery[]>(`/breweries?${filter}`).subscribe(breweriesFromServer => {      
      this.breweriesEvent.next(breweriesFromServer);
    });
  } 

}
