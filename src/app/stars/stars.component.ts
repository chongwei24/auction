import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private rating:number=0;//默认为五星
  private stars:[boolean];
  //
  constructor() { }

  ngOnInit() {
    //
    /*this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating)//判断星是否是实星
    }*/
    this.stars=[false,true,true,true,false];
    //
  }

}
