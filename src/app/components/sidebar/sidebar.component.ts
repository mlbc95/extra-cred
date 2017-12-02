import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  events = [];
  constructor() { }
  private menuItemsArray: any[] = [ 
    {"title":"Electricity","link":"#"},
    {"title":"Mobile Bill","link":"#"},
    {"title":"Home and Kitchen","link":"#",
    "subItems":[
                {"title":"Furniture","link":"#"},
                {"title":"Cookware","link":"#"},
               ]
    },
    {"title":"Car and Bike Accessories","link":"#",
     "subItems":[
                  {"title":"Tyres and Alloys","link":"#"},
                  {"title":"Comfort and Safety","link":"#"},
                 ]
    },
];
  ngOnInit() {
  }

  public onMenuOpen(){
    console.log("menu Opened");
  }
  public onMenuClose(){
    console.log("menu closed");
  }
}
