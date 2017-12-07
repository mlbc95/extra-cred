import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {RoutesListeningService} from "../../services/routes-listening.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarOpened: EventEmitter<boolean> = new EventEmitter<boolean>();
  events = [];
  currentUserId: string;
  
  private menuItemsArray: any[] = [
    { "title": "Dashboard",
        "link": "/user/student/dashboard/"
    },
    { "title": "Mobile Bill",
        "link": "#"
    },
    {
      "title": "Home and Kitchen",
        "link": "#",
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

  constructor(
      private routesListeningService: RoutesListeningService,
      private router: Router
  ) { }

  ngOnInit() {
      this.routesListeningService.loadCurrentUserId().subscribe(
          (id: string) => {
              this.currentUserId = id;
          }
      )
  }

  public onMenuOpen() {
    this.sidebarOpened.emit(true);
  }
  public onMenuClose() {
    this.sidebarOpened.emit(false);
  }

  onItemSelect(event) {
      console.log(event);
      console.log(`${event.link}${this.currentUserId}`)
      this.sidebarOpened.emit(false);
      this.router.navigate([event.link, this.currentUserId]);
  }
}
