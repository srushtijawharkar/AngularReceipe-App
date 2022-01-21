import { Component, ElementRef, OnInit,ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') amountInputRef :ElementRef;
  @ViewChild('amountinput') nameInputRef : ElementRef;
  
   @Output() ingredientAdded = new EventEmitter<Ingredient>();
     constructor() { }

  ngOnInit(): void {
  }
  addItem(){
const ingName = this.nameInputRef.nativeElement.value;
const ingAmount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(ingName,ingAmount);
this.ingredientAdded.emit(newIngredient);

  }
}
