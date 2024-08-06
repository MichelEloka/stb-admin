import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraphboardComponent } from './components/atoms/chart/graphboard/graphboard.component';
import { CaseoptionComponent } from './components/molecules/cases/caseoption/caseoption.component';
import { MenuiconComponent } from './components/molecules/menuicon/menuicon.component';
import { ProfileBlocComponent } from './components/molecules/profile-bloc/profile-bloc.component';
import { NotifItemComponent } from './components/molecules/notif-item/notif-item.component';
import { RedButtonComponent } from './components/atoms/buttons/red-button/red-button.component';
import { BurgubiaSectionComponent } from './components/molecules/burgubia-section/burgubia-section.component';
import { CasesPartnerComponent } from './components/molecules/cases/cases-partner/cases-partner.component';
import { CarouselCasePartnerComponent } from './components/molecules/carousel-case-partner/carousel-case-partner.component';
import { LineItemsComponent } from './components/atoms/line-items/line-items.component';
import { ActulitySectionComponent } from './components/molecules/actulity-section/actulity-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BurgubiaSectionComponent,RouterOutlet,GraphboardComponent,CaseoptionComponent,MenuiconComponent,ProfileBlocComponent,NotifItemComponent,RedButtonComponent,CasesPartnerComponent,CarouselCasePartnerComponent,LineItemsComponent,ActulitySectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stb-admin';

  chartNodes: { label: string; data: number[] }[] = [
    { label: 'Initial Node', data: [10, 20, 30, 40, 50, 60] }
  ];


 slides = [
    { srcBack: '../../../../../assets/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 1' },
    { srcBack: '../../../../../assets/case-partner/partner2-img.png', title: 'Université de Nante', description: 'Description 2' },
    { srcBack: '../../../../../assets/case-partner/partner3-img.png', title: 'Université de Nante', description: 'Description 3' },
    { srcBack: '../../../../../assets/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 4' },
    { srcBack: '../assets/case-partner/partner2-img.png', title: 'Titre 4', description: 'Description 4' },
    { srcBack: '../../../../../assets/case-partner/partner3-img.png', title: 'Titre 3', description: 'Description 3' },

    
  ];
  addRandomNode(): void {
    const newNode = {
      label: `Node ${this.chartNodes.length + 1}`,
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100))
    };
    this.chartNodes = [...this.chartNodes, newNode];
  }
  
}
