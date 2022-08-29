import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  name: string = 'Juan';
  lastName: string = 'Perez';
  age: number = 29;

  //private age: number = 29;
  // getAge(): number {
  // return this.age;
}
