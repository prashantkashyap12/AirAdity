import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainHomeComponent } from './main-home/main-home.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';
import { CareerComponent } from './career/career.component';
import { AviationComponent } from './aviation/aviation.component';
import { NoticeComponent } from './notice/notice.component';
import { HowApplyComponent } from './how-apply/how-apply.component';
import { AdmitCardComponent } from './admit-card/admit-card.component';
import { VHelpComponent } from './v-help/v-help.component';
import { PrivacyRefundComponent } from './privacy-refund/privacy-refund.component';
import { MainwebComponent } from './mainweb/mainweb.component';
import { PageSectionComponent } from './page-section/page-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomeComponent,
    MainFooterComponent,
    AboutusComponent,
    ContactusComponent,
    ServiceComponent,
    CareerComponent,
    AviationComponent,
    NoticeComponent,
    HowApplyComponent,
    AdmitCardComponent,
    VHelpComponent,
    PrivacyRefundComponent,
    MainwebComponent,
    PageSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
