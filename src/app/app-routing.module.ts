import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsTestComponent } from './pages/Skill-Test/skills-test/skills-test.component';
import { ExamComponent } from './pages/Skill-Test/exam/exam.component';
import { ResultComponent } from './pages/Skill-Test/result/result.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RegistComponent } from './pages/regist/regist.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"regist",component:RegistComponent},
  {path:"login",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"skillstest",component: SkillsTestComponent},
  {path:"skillstest/exam",component:ExamComponent},
  {path:"skillstest/result",component:ResultComponent},
  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
