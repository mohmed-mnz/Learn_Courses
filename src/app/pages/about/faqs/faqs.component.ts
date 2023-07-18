import { Component } from '@angular/core';
import { Faq } from 'src/app/models/faq';
import { faqList } from 'src/app/models/faqList';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  myFaqs:Faq[]=faqList;

  stopVideo(video:any) {
    video.pause();
  }
}
