import { Component } from '@angular/core';
import { Social } from 'src/app/models/social';
import { socialLinks } from 'src/app/models/socialLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  mySocial:Social[] = socialLinks;
}
