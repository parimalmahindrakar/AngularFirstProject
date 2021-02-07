import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameReferenceInput! :ElementRef 
  @ViewChild('amountInput') amountReferenceInput!: ElementRef
  @Output() ingredientAdded = new EventEmitter <Ingredient>()


  constructor() { }

  ngOnInit(): void {
  }
  onClickAdded() {
    const ingName = this.nameReferenceInput.nativeElement.value;
    const ingAmount = this.amountReferenceInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.ingredientAdded.emit(newIngredient)
  }

}
