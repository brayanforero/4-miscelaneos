import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { AsyncComponent } from './components/async/async.component';
import { MarkDirective } from './directives/mark.directive';
import { MarkComponent } from './components/mark/mark.component';

@NgModule({
  declarations: [AppComponent, NgStyleComponent, NgClassComponent, AsyncComponent, MarkDirective, MarkComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
