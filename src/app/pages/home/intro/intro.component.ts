import { Component } from '@angular/core';
import { IntroList } from './../../../models/introList';
import { Intro } from 'src/app/models/intro';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  myIntroList:Intro[] = IntroList;
}
