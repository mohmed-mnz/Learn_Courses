import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/home/landing/landing.component';
import { IntroComponent } from './pages/home/intro/intro.component';
import { CoursesComponent } from './pages/home/courses/courses.component';
import { EventsComponent } from './pages/home/events/events.component';
import { TeamComponent } from './pages/home/team/team.component';
import { SubscribeComponent } from './pages/home/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { SkillsTestComponent } from './pages/Skill-Test/skills-test/skills-test.component';
import { ExamComponent } from './pages/Skill-Test/exam/exam.component';
import { ResultComponent } from './pages/Skill-Test/result/result.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { RegistComponent } from './pages/regist/regist.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqsComponent } from './pages/about/faqs/faqs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LandingComponent,
    IntroComponent,
    CoursesComponent,
    EventsComponent,
    TeamComponent,
    SubscribeComponent,
    FooterComponent,
    ContactComponent,
    ContactBoxComponent,
    SkillsTestComponent,
    ExamComponent,
    ResultComponent,
    NotfoundComponent,
    RegistComponent,
    LoginComponent,
    AboutComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
