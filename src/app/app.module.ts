import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogCardComponent } from './catalog/catalog-card/catalog-card.component';
import { CatalogSearchComponent } from './catalog/catalog-search/catalog-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingsComponent } from './catalog/catalog-card/ratings/ratings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogCardComponent,
    CatalogSearchComponent,
    RatingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
