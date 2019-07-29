import { Component, OnInit } from '@angular/core';
import { RESTUARANT } from '../resturantants';

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.css']
})
export class ResturantListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
restuarant = RESTUARANT;
  
filterRestuarant: any[];
private _searchTerm: string;
get searchTerm(): string {
	return this._searchTerm;
}
set searchTerm(value: string) {
this._searchTerm = value;
this.filterRestuarant = this.filterRestuarants(value);
}
filterRestuarants(searchString: string) {
return this.restuarant.filter(restuarant =>
	restuarant.city.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
}
}
