import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  template: `
    <p>ng-class works!</p>
    <ul>
      Properties
      <li>Outline: {{ outline }}</li>
      <li>Number: {{ count }}</li>
    </ul>
    <div class="d-flex flex-wrap" [style.gap.px]="20">
      <button
        [style.width.rem]="count"
        (click)="count = count + 1"
        class="btn"
        [class]="{
          'btn-danger': count <= 5,
          'btn-info': count > 5 && count < 10,
          'btn-success': count >= 10
        }"
      >
        ng-class works! <i class="fa fa-angle-up"></i>
      </button>
      <button
        [disabled]="count === 0"
        (click)="decrement()"
        class="btn"
        [class]="{
          'btn-danger': count <= 5,
          'btn-info': count > 5 && count < 10,
          'btn-success': count >= 10
        }"
      >
        ng-class works! <i class="fa fa-angle-down"></i>
      </button>
      <button
        (click)="outline = !outline"
        class="btn"
        [class]="{ 'btn-outline-success': outline }"
      >
        ng-class works!
      </button>
      <button
        (click)="outline = !outline"
        class="btn"
        [class]="{ 'btn-outline-success': outline }"
      >
        ng-class works!
      </button>

      <button
        (click)="outline = !outline"
        [class]="['btn', 'btn-small', 'btn-info']"
      >
        ng-class works!
      </button>

      <button class="btn" [class]="apply()">Binding Class reactive</button>
    </div>
  `,
  styles: [],
})
export class NgClassComponent implements OnInit {
  constructor() {}
  count: number = 0;
  outline: boolean = false;
  ngOnInit(): void {}

  decrement(): void {
    let count = this.count;

    if (count > 0) this.count = this.count - 1;
  }

  apply() {
    return {
      'btn-danger': this.count <= 5,
      'btn-info': this.count > 5 && this.count < 10,
      'btn-success': this.count >= 10,
    };
  }
}
