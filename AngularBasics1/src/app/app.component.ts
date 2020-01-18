import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
 template:`<h1>{{title}}</h1>
 <span>{{subtitle}}</span>
 <h1>dreamcompanies</h1>
 <p *ngIf="dreamcompanies.length > 3">You have more than three dream companies</p>
 <span>{{firstPreference}}</span>
 <ul>
 <li *ngFor="let company of dreamcompanies">{{company.companyName}}</li>
 </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;
  subtitle:string;
  dreamcompanies:Hero[]=[
    new Hero(1,"google"),
    new Hero(2,'microsoft'),
    new Hero(3,'linkedin'),
    new Hero(4,'bosch')
  ];
  firstPreference=this.dreamcompanies[0].companyName;
  constructor(){
    this.title = 'AngularBasics1';
    this.subtitle='interpolation';
  }

}
