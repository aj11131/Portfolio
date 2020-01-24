import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navigation', {static: true}) navigation: ElementRef;
  @ViewChild('shade', {static: true}) shade: ElementRef;
  @ViewChild('links', {static: true}) links: ElementRef;
  @ViewChild('menu', {static: true}) menu: ElementRef;

  menuDisplay = false;

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    console.log(event.target);
    // tslint:disable-next-line: max-line-length
    if (this.menuDisplay && event.target !== this.navigation.nativeElement && event.target !== this.links.nativeElement && event.target !== this.menu.nativeElement) {
      this.toggleMenuView(true);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  toggleMenuView(menuDisplay: boolean) {
    if (menuDisplay === false) {
      this.navigation.nativeElement.style.transform = 'scale(1,1)';
      this.shade.nativeElement.style.display = 'block';
      this.links.nativeElement.style.opacity = '1';
      this.links.nativeElement.style.transition = 'opacity 250ms ease-in-out 150ms';
      this.menuDisplay = !this.menuDisplay;
    } else {
      this.navigation.nativeElement.style.transform = 'scale(0,1)';
      this.shade.nativeElement.style.display = 'none';
      this.menuDisplay = !this.menuDisplay;
      this.links.nativeElement.style.opacity = '0';
    }
  }

}
