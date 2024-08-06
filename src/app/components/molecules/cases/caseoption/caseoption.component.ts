import { Component, Input } from '@angular/core';
import internal from 'node:stream';

@Component({
  selector: 'app-caseoption',
  standalone: true,
  imports: [],
  templateUrl: './caseoption.component.html',
  styleUrl: './caseoption.component.scss'
})
export class CaseoptionComponent {
  @Input() srcBack: string="../../../../../assets/hand.png";
  @Input() srcCover: string="../../../../../assets/optionCover.png";
  @Input() title: string="Université";
  @Input() description: string="A community for VR and novices alike, regular and friendly chat.";
  @Input() members: number=545.680;

  

}
