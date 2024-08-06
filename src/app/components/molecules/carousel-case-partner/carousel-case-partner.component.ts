import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RedButtonComponent } from '../../atoms/buttons/red-button/red-button.component';
import { CasesPartnerComponent } from '../cases/cases-partner/cases-partner.component';

@Component({
  selector: 'app-carousel-case-partner',
  standalone: true,
  imports: [CommonModule,RedButtonComponent,CasesPartnerComponent],
  templateUrl: './carousel-case-partner.component.html',
  styleUrl: './carousel-case-partner.component.scss'
})
export class CarouselCasePartnerComponent {
  @Input() slides = [
    { srcBack: '../../../../../assets/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 1' }
    
    
  ];

  currentIndex = 0;

  private intervalId: any;

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.stopAutoSlide();
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); 
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
  }

  getSlideIndex(relativeIndex: number): number {
    const length = this.slides.length;
    return (this.currentIndex + relativeIndex + length) % length;
  }

}
