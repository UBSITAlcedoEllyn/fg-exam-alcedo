import { Component } from '@angular/core';

interface appInfo {
 title: string;
  description: string;
  WelcomeMessage: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    appInfo: appInfo = {
      title: "My FG-Exam for APPDEV",
      description: "This is my first grading exam output for my APPDEV subject",
      WelcomeMessage: "Hello welcome to my app. this app will be my output for my first grading examfor my APPDEV subject. I hope you like it and enjoy"
}
}