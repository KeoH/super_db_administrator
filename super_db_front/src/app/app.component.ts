import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  menuOpen = false;

  constructor(private _router: Router){

  }

  toogleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  isActive(instruction: string): boolean{
    return this._router.isActive('home', true);
  }


}
