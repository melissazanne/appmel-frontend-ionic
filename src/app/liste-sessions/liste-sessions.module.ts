import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeSessionsPageRoutingModule } from './liste-sessions-routing.module';

import { ListeSessionsPage } from './liste-sessions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeSessionsPageRoutingModule
  ],
  declarations: [ListeSessionsPage]
})
export class ListeSessionsPageModule {}
