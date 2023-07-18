import { Component } from '@angular/core';
import { CoursesList } from 'src/app/models/couresesList';
import { Courses } from 'src/app/models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  myCourses:Courses[]= CoursesList;
}
