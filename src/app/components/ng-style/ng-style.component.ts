import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ color: color, 'font-size': size + 'px' }">
      ng-style works! | apply size text property {{ size }} px
    </p>

    <p [style.fontSize.px]="size">
      ng-style works! | apply size text property {{ size }} px
    </p>

    <p [ngStyle]="{ 'font-size': size + 'px' }">
      ng-style works! ng-style works! | apply color text property
    </p>

    <div class="flex mb-3">
      <button (click)="size = size + 2" class="btn btn-primary">
        <i class="fa fa-plus"></i>
      </button>
      <button (click)="size = size - 2" class="btn btn-primary">--</button>
    </div>
  `,
  styles: [],
})
export class NgStyleComponent implements OnInit {
  constructor() {}
  size: number = 12;
  color: string = '#ccc';

  ngOnInit(): void {}
}
