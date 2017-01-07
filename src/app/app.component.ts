import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {} //Why did I need to put this here in order for the type declaration to work?
  title: string = 'app works!';
  test: string = 'This is a test';
  name: string = 'Angular2';

  setName(newName: string) {
    this.name = newName;
  }
}
