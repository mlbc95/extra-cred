import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';

import { RoutesListeningService } from '../../../services/routes-listening.service';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(
    private router: Router,
    private routesListeningService: RoutesListeningService) { }

  ngOnInit() {
    this.router.events
    .filter((events) => events instanceof RoutesRecognized)
    .pairwise()
    .subscribe((event: [RoutesRecognized, RoutesRecognized]) => {
      this.routesListeningService.getRouteEvent(event);
    });
  }
}
