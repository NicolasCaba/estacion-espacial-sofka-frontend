import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-page',
  templateUrl: './crear-page.component.html',
  styleUrls: ['./crear-page.component.css']
})
export class CrearPageComponent implements OnInit {

  optionSelected: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeOption(value: string): void {
    this.optionSelected = value;
  }

}
