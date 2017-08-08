import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../login/login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AuthService]
})
export class MenuComponent implements OnInit {

  constructor(private _AuthService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this._AuthService.logout();
  }
}
