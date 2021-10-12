import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMark]',
})
export class MarkDirective {
  @Input() appMark: string = 'yellow';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.appMark);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground('');
  }

  private setBackground(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
