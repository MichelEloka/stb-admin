import { Component, Input } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-profil-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-state.component.html',
  styleUrl: './profil-state.component.scss'
})
export class ProfilStateComponent {
  @Input() UrlProfilImage?:string;
  @Input() connectedState:boolean=false;
  @Input() styleState:string='red';


}
