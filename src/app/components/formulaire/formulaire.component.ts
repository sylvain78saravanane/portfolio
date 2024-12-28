import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  standalone: false,

  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  champs = [
    {label:'Nom', type:'text'},
    {label:'Prénom', type:'text'},
    {label:'Email', type:'email'},
    {label:'Téléphone', type:'tel'},
  ]
}
