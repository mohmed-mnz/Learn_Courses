import { Component } from '@angular/core';
import { About } from 'src/app/models/about';
import { aboutList } from 'src/app/models/aboutList';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  myAbout:About[]=aboutList;
}
