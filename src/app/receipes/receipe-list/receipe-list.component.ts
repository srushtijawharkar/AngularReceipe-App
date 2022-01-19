import { Component, OnInit } from '@angular/core';
import  {Receipe} from '../receipe.model';
@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
receipes: Receipe[] = [
new Receipe('Test Receipe','Simply Test','https://www.recipetineats.com/wp-content/uploads/2014/12/Party-Food-Recipes-Cover-Image.jpg')

];
  constructor() { }

  ngOnInit(): void {
  }

}
