import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PersonComponent } from 'src/app/person/person.component';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [AppComponent, PeopleComponent, PersonComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
