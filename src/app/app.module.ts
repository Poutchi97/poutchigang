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
import { ProduitUniqueComponent } from './produit-unique/produit-unique.component';
import { PresentationCoachingComponent } from './homepage/presentation-coaching/presentation-coaching.component';
import { SidebarModule } from 'primeng/sidebar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgrammeComponent } from './coaching/programme/programme.component';
import { DeroulementCoachingComponent } from './coaching/deroulement-coaching/deroulement-coaching.component';
import { GalleriaModule } from 'primeng/galleria';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    PresentationComponent,
    CatalogueHomepageComponent,
    FooterComponent,
    BoutiqueComponent,
    CoachingComponent,
    ProduitUniqueComponent,
    PresentationCoachingComponent,
    CartComponent,
    ProgrammeComponent,
    DeroulementCoachingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    FontAwesomeModule,
    ButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GalleriaModule,
    BadgeModule,
    ToastModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
