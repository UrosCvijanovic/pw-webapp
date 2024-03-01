import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent {
    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
      // Implement your onScroll logic here
      // This method will be called whenever the user scrolls

      // Example: Log the current scroll position
      const scrollPosition = window.pageYOffset;
      console.log('Scroll position:', scrollPosition);
    }
}
