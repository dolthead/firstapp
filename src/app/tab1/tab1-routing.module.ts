import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Page } from '../page2/page2.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'page2',
    component: Page2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
