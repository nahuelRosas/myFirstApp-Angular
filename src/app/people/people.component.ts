import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  disabled: boolean = false; //Property Binding use [] in HTML

  //Start Event Binding use () in HTML
  message: string = 'No person has been added';
  title = '';
  addPerson() {
    this.message = 'Person was added';
  }
  // changeTitle(event: Event) { unnecessary with Two way binding
  //   this.title = (<HTMLInputElement>event.target).value;
  // }
  //End Event Binding
}

// in HTML  Property & Event Binding
// <<div class="container">
//   <div class="row">
//   <div class="col">
//     <h1>List of people:</h1>
//     <button
//       class="btn btn-primary"
//       [disabled]="disabled"
//       (click)="addPerson()">
//       Add Person
//     </button>
//     <p>{{ message }}</p>
//     <app-person></app-person>
//     <label>Title Person</label>
//     <input type="text" class="form-control"

//    (input)="changeTitle($event)" WHIT EVENT BINDING
//    [(ngModel)]="title" WHIT TWO WAY BINDING

//      />
//     {{ title }}
//   </div>
// </div>
// </div>
