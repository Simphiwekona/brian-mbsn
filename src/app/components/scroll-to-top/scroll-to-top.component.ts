import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  standalone: true
})
export class ScrollToTopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}