import { Component } from '@angular/core';
import { Team } from 'src/app/models/team';
import { teamList } from 'src/app/models/teamList';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  myTeam:Team[] = teamList;
}
