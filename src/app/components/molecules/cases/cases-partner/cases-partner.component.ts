import { Component, Input } from '@angular/core';
import { RedButtonComponent } from '../../../atoms/buttons/red-button/red-button.component';

@Component({
  selector: 'app-cases-partner',
  standalone: true,
  imports: [RedButtonComponent],
  templateUrl: './cases-partner.component.html',
  styleUrl: './cases-partner.component.scss'
})
export class CasesPartnerComponent {
  @Input() srcBack: string="../../../../../assets/case-partner/partner-img.png";
  @Input() srcCover: string="../../../../../assets/case-partner/partner-cover.png";
  @Input() title: string="Université";
  @Input() description: string="A community for VR and novices alike, regular and friendly chat.";
  

}
