import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('dashboardWrapper') dashboardWrapper: ElementRef;
  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  onSidebarToggleHandler(openState: boolean) {
    if (openState) {
      this._renderer.addClass(this.dashboardWrapper.nativeElement, 'pushed');
    } else {
      this._renderer.removeClass(this.dashboardWrapper.nativeElement, 'pushed');
    }
  }

}
