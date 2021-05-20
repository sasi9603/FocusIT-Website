import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedFooterComponent } from './fixed-footer/fixed-footer.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [

  {path:'fixed',component:FixedFooterComponent},
  {path:'footer',component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
