import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-verify',
  templateUrl: './professor-verify.component.html',
  styleUrls: ['./professor-verify.component.css']
})
export class ProfessorVerifyComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get Token
    console.log(this.activatedRoute.snapshot);
  }

}
