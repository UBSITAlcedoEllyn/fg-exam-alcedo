import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegistrationComponent } from '../registration/registration.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [

       {
        path: 'login',
    component: LoginComponent,
    },

    {
        path: 'profile',
        component: ProfileComponent,
    },

    {
        path: 'registration',
        component: RegistrationComponent,
    },

    {
        path: 'home',
        component: HomeComponent,
    }
];
