import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Array of Object*/
  Users = [
  {name: `Rakesh`, Age: 32},
  {name: `Sree`, Age: 26},
  {name: `Nachu`, Age: 2}
  ];

}
