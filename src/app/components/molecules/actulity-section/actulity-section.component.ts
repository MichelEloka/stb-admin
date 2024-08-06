import { Component, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { LineItemsComponent } from '../../atoms/line-items/line-items.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-actulity-section',
  standalone: true,
  imports: [LineItemsComponent,CommonModule],
  templateUrl: './actulity-section.component.html',
  styleUrl: './actulity-section.component.scss'
})
export class ActulitySectionComponent {
  @ViewChild(LineItemsComponent) lineItemsComponent!: LineItemsComponent;
  private isBrowser: boolean;
  private intervalId: any;
  currentIndex = 0;

  @Input() slides = [
    { srcBack: '../../../../../assets/case-partner/partner-img.png', title: 'Université de Nante', description: 'Description 1' }
    
    
  ];


  public changeColor( direction: string){
    this.lineItemsComponent.changeColor(direction);
  }

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
      this.changeColor("right");
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
