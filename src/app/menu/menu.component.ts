import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {


  constructor(private _titleService: Title,
              private _router: Router,) {

  }

  goBack(route: string): void {
    this._router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Covalent Users');

  }
}
