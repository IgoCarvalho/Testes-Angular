import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TabelaComponent } from './tabela/tabela.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tabela', component: TabelaComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
