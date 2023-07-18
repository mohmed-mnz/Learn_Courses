import { Component } from '@angular/core';
import { Event } from 'src/app/models/event';
import { eventsList } from 'src/app/models/eventsList';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  myEvents:Event[] = eventsList;
}
