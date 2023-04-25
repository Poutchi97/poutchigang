import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { CoachingComponent } from './coaching/coaching.component';
import { ConditionsVenteComponent } from './conditions/conditions-vente/conditions-vente.component';
import { PolitiqueConfidentialiteComponent } from './conditions/politique-confidentialite/politique-confidentialite.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProduitUniqueComponent } from './produit-unique/produit-unique.component';
import { SuccessComponent } from './paiement/success/success.component';
import { CancelComponent } from './paiement/cancel/cancel.component';

const routes: Routes = [
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'boutique/produit/:id', component: ProduitUniqueComponent },
  { path: 'boutique/success', component: SuccessComponent },
  { path: 'boutique/cancel', component: CancelComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'conditions-generales-de-vente', component: ConditionsVenteComponent },
  { path: 'politique-de-confidentialite', component: PolitiqueConfidentialiteComponent },
  { path: '**', component: HomepageComponent, pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' },)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
