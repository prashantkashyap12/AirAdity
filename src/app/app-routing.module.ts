import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutusComponent } from '../app/aboutus/aboutus.component';
import { AdmitCardComponent } from './admit-card/admit-card.component';
import { AviationComponent } from './aviation/aviation.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowApplyComponent } from './how-apply/how-apply.component'; 
import { NoticeComponent } from './notice/notice.component';
import { PrivacyRefundComponent } from './privacy-refund/privacy-refund.component';
import { ServiceComponent } from './service/service.component';
import { VHelpComponent } from './v-help/v-help.component';
import { MainwebComponent } from './mainweb/mainweb.component'; 

const routes: Routes = [
  {path:'', component:MainwebComponent},
  {path:'home', component:MainwebComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'AdminCard', component:AdmitCardComponent},
  {path:'Aviation', component:AviationComponent},
  {path:'career', component:CareerComponent},
  {path:'contact', component:ContactusComponent},
  {path:'howApply', component:HowApplyComponent},
  {path:'notice', component:NoticeComponent},
  {path:'privacy', component:PrivacyRefundComponent},
  {path:'service', component:ServiceComponent},
  {path:'help', component:VHelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
