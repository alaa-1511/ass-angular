import { Component } from '@angular/core';
interface Iitems{
image:string;
icon:string;
}
@Component({
  selector: 'app-protifilo',
  imports: [],
  templateUrl: './protifilo.component.html',
  styleUrl: './protifilo.component.css'
})
export class ProtifiloComponent {
modulItem:Iitems ={} as Iitems
items: Iitems []=
[
  {
    image:"img mealify1.png",
   icon:"fa-solid fa-plus"
  },

  {
    image:"img mealify2.png",
   icon:"fa-solid fa-plus"
  },

  {
    image:"img mealify3.png",
   icon:"fa-solid fa-plus"
  },

  {
    image:"img mealify1.png",
   icon:"fa-solid fa-plus"
  },

  {
    image:"img mealify2.png",
   icon:"fa-solid fa-plus"
  },
  {
    image:"img mealify3.png",
   icon:"fa-solid fa-plus"
  },

]

}
