import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'country-details',
  templateUrl: './country-details.component.html'
})
export class CountryDetailsComponent implements OnInit {
@Input() country: Country;
  constructor() { }

  ngOnInit(): void {
  }

}
