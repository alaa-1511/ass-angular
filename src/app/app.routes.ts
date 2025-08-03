import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProtifiloComponent } from './protifilo/protifilo.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{path:'' ,redirectTo:'home' , pathMatch:'full' },

{path: 'about' , component:AboutComponent},
{path: 'home' , component:HomeComponent},
{path: 'protifilo' , component:ProtifiloComponent},
{path: 'contact' , component:ContactComponent},
{path: '**' , component:NotfoundComponent},



];
