import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueHomepageComponent } from './homepage/catalogue-homepage/catalogue-homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PresentationComponent } from './homepage/presentation/presentation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { CoachingComponent } from './coaching/coaching.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PresentationComponent,
    CatalogueHomepageComponent,
    FooterComponent,
    BoutiqueComponent,
    CoachingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
