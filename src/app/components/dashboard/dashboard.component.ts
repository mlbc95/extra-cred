import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesListeningService} from "../../services/routes-listening.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private routesListeningService: RoutesListeningService) { }

  ngOnInit() {
    // Get ID
    console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.activatedRoute.snapshot.params['role']);
    this.routesListeningService.saveCurrentUserId(this.activatedRoute.snapshot.params['id']);
  }
  search(keyword:string){
    this.router.navigate([`user/search/${keyword}`]);
    
  }
}
