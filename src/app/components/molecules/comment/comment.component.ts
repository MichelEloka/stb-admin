import { Component, Input } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProfilStateComponent } from '../../atoms/profil-state/profil-state.component';


@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,ProfilStateComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() content:string="Lorem bis esse sed ratione incidunt sed sed ration ised ratione  ised";
  @Input() UrlProfilImage?:string;
  @Input() connectedState:boolean=false;

}
