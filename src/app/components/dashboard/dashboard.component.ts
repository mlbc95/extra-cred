import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    // Get ID
    console.log(this.activatedRoute.snapshot.params['id']);
    console.log(this.activatedRoute.snapshot.params['role']);
  }
  search(keyword:string){
    this.router.navigate([`user/search/${keyword}`]);
    
  }
}
