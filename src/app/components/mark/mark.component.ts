import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mark',
  template: `
    <p>mark works!</p>
    <p>a apply custopm directive</p>

    <div>
      <p [appMark]="color" class="p-3 rounded">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        culpa.
        <span [style.color]="color" class="h4 bg-dark p-3 rounded"
          >Current color {{ color }}</span
        >
      </p>

      <div [style.gap.rem]="1.25" class="d-flex">
        <button (click)="color = 'yellow'" class="btn btn-warning">
          Warning
        </button>
        <button (click)="color = 'green'" class="btn btn-success">
          Success
        </button>
        <button (click)="color = 'blue'" class="btn btn-primary">Blue</button>
      </div>
    </div>
  `,
  styles: [],
})
export class MarkComponent implements OnInit {
  constructor() {}
  color: string = 'yellow';
  ngOnInit(): void {}
}
