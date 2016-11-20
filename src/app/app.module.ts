import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReceitaModule } from './receitas/receita.module';

import { AppComponent } from './app.component';
import { NivelComponent } from './niveis/nivel.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NivelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReceitaModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
