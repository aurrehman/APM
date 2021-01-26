import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/models/country';
import { Region } from 'src/app/models/region';

@Component({
  selector: 'region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

  @Input() dataset: Region[];
  @Input() label: string;
  @Output() selectedValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(event): void {
    const value = event.target.value;
    this.selectedValue.emit(value);

  }

}
