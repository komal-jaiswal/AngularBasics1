import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template:`<h1>{{title}}</h1>
 <span>{{subtitle}}</span>
 <h1>dreamcompanies</h1>
 <span>{{firstPreference}}</span>
 <ul>
 <li *ngFor="let company of dreamcompanies">{{company}}</li>
 </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  subtitle:string;
  dreamcompanies:string[]=['google','miscrosoft','linkedin','bosch'];
  firstPreference=this.dreamcompanies[0];
  constructor(){
    this.title = 'AngularBasics1';
    this.subtitle='interpolation';
  }

}
