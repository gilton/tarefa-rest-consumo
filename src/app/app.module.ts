import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CampeonatoService } from './services/campeonato.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CensoComponent } from './components/censo/censo.component';
import { CampeonatosComponent } from './components/campeonatos/campeonatos.component';

@NgModule({
  declarations: [
    AppComponent,
    CensoComponent,
    CampeonatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CampeonatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
