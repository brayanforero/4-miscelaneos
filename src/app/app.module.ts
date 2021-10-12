import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { AsyncComponent } from './components/async/async.component';
import { MarkDirective } from './directives/mark.directive';
import { MarkComponent } from './components/mark/mark.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioEditComponent } from './components/usuarios/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgClassComponent,
    AsyncComponent,
    MarkDirective,
    MarkComponent,
    NavbarComponent,
    HomeComponent,
    UsuariosComponent,
    UsuarioEditComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
