import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.scss']
})
export class CatalogSearchComponent implements OnInit {


  searchForm: FormGroup;

  constructor(
    private catalogService: CatalogService
  ) { }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      searchQuery: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    this.catalogService.getBrewerieFilterByName(this.searchForm.value.searchQuery)
  }

}
