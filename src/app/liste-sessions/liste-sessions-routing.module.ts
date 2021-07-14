import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeSessionsPage } from './liste-sessions.page';

const routes: Routes = [
  {
    path: '',
    component: ListeSessionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeSessionsPageRoutingModule {}
