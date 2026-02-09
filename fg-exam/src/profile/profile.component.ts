import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User = {
    name: "Ellyn Alcedo",
    email: "20242248@s.ubaguio.edu",
    age: 19,
    location: "Baguio City, Benguet, Philippines",
    bio: "A second year IT student at the University of bAGUIO !!"
  };
}