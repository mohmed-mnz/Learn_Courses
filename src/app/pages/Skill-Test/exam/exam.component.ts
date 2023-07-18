import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamsService } from 'src/app/services/exams.service';
import { CountService } from './../../../services/count.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  count:number =0;
  myQuestions:any;
  ques:any;
  constructor(private exams:ExamsService, private router:Router, private counter:CountService){
  }
  ngOnInit(): void {
    this.exams.getQuestions().subscribe({
      next:(Response) => {this.myQuestions=Response},
      error:(myError) => console.log(myError)
    })
    
    // this.inputs=document.querySelectorAll(".radio-answer");
    throw new Error('Method not implemented.');
  }
  seeanwery(h:any) {
    this.ques=this.myQuestions[Number(h.id)-1]
    if (h.value == this.ques.correctAnswer) {
      this.count++;
    }
  }
  sendAnswers() {
    this.counter.updateCount(this.count);
    this.router.navigate(['skillstest/result'])
  }
}
