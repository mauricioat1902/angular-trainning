import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlunosModule } from './alunos/alunos.module';
import { CursosService } from './cursos/cursos.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AlunosModule,

    AppRoutingModule,
    //routing
  ],
  providers: [ CursosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
