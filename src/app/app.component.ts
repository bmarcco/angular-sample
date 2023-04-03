import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';

  constructor(private router:Router) { }

  public pages2= [{
    pageTitle: 'Početna',
    link: 'home',
    subPages:[]
  },
  {
    pageTitle: 'O nama',
    link: 'about',
    subPages:[
      {
        pageTitle: "Naši projekti",
        link:"about"
      }
    ]
  },
  {
    pageTitle: 'Kontakt',
    link: 'contact',
    subPages:[]
  }]

  pageClick(item){
    this.router.navigate(["/"+item]);
  }
}
