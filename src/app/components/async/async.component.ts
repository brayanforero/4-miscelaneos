import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  template: `
    <div>
      <p>async works!</p>

      <button
        [disabled]="isLoading"
        (click)="getData()"
        class="btn btn-primary"
      >
        <i
          class="fa"
          [class]="{
            'fa-save': !isLoading,
            'fa-spinner': isLoading,
            'fa-spin': isLoading
          }"
        ></i>
        {{ isLoading ? 'Submiting...' : 'Send' }}
      </button>
    </div>
  `,
  styles: [],
})
export class AsyncComponent implements OnInit {
  constructor() {}
  title: string = 'Async';
  isLoading: boolean = false;
  ngOnInit(): void {}

  getData() {
    this.isLoading = true;
    const timeout = setTimeout(() => {
      this.isLoading = false;
      clearTimeout(timeout);
    }, 2000);
  }
}
