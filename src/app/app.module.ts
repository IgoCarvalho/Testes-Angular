import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabelaComponent } from './tabela/tabela.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { TimeTabelaComponent } from './tabela/time-tabela/time-tabela.component';
import { TimesService } from './tabela/times.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabelaComponent,
    HomeComponent,
    SobreComponent,
    TimeTabelaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [TimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
