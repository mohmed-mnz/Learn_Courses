import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  myCount:any;
  score:number=0;
  constructor(private counter:CountService){}

  ngOnInit(): void {
    this.myCount=this.counter.getCount();
    this.score=Number((this.myCount/15*100).toFixed(2));
    throw new Error('Method not implemented.');
  }

}
