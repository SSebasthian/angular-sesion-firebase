import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';



export const routes: Routes = [
  {path:'home',
    component:HomeComponent
  },
  {path:'login',
    component:LoginComponent
  },
  {path:'registro',
    component:RegistroComponent
  },
  {path:'**',
    component:HomeComponent
  }

];
