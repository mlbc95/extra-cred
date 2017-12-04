import { Professor } from '../../models/Professor';
import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import * as _ from "lodash";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword:string;
  //temp varibale until we get data from backend
  classes= [
    {name:"INFOSYS3600", professor:"Lawton",event:5,id:"123455"},
    {name:"INFOSYS4200", professor:"Sauter",event:50,id:"12555"}
  ]

  //creat model later
  fResult:any;

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    var tempKeyword;
    this.keyword = this.activatedRoute.snapshot.params['keyword'];
    //had to store it in different varibale to work..not sure why...look at it later
    tempKeyword =this.keyword.toUpperCase();
    console.log(tempKeyword)

    this.fResult=_.filter(this.classes,function(item){
      return item.name.indexOf(tempKeyword)>-1;
      });
      console.log(this.fResult)

      

  }

  navToDetail(id:string){
    console.log(id)
    this.router.navigate([`user/search/detail/${id}`])
  }

}
