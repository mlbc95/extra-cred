import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarOpened: EventEmitter<boolean> = new EventEmitter<boolean>();
  events = [];
  
  private menuItemsArray: any[] = [
    { "title": "Electricity", "link": "#" },
    { "title": "Mobile Bill", "link": "#" },
    {
      "title": "Home and Kitchen", "link": "#",
      "subItems": [
        { "title": "Furniture", "link": "#" },
        { "title": "Cookware", "link": "#" },
      ]
    },
    {
      "title": "Car and Bike Accessories", "link": "#",
      "subItems": [
        { "title": "Tyres and Alloys", "link": "#" },
        { "title": "Comfort and Safety", "link": "#" },
      ]
    },
  ];

  private menuConfig =  {
    closeOnCLick: true
  }

  constructor() { }

  ngOnInit() {
  }

  public onMenuOpen() {
    this.sidebarOpened.emit(true);
  }
  public onMenuClose() {
    this.sidebarOpened.emit(false);
  }
}
