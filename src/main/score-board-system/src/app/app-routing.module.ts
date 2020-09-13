import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewingComponentComponent} from './components/viewing-component/viewing-component.component';
import {UpdateComponentComponent} from './components/update-component/update-component.component';
import {ApprovingComponentComponent} from './components/approving-component/approving-component.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewingComponentComponent
  },
  {
    path: 'update',
    component: UpdateComponentComponent
  },
  {
    path: 'approve',
    component: ApprovingComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
