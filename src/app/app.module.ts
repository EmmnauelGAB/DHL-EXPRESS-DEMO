import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./app.routing";

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagementComponent } from './management/management.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { MainFooComponent } from './main-foo/main-foo.component';
import { FormEditAddComponent } from './management/form-edit-add/form-edit-add.component';
import { ProfileComponent } from './management/profile/profile.component';
import { ManagementClientsComponent } from './modules/clients/management-clients/management-clients.component';
import { FormEditAddClientComponent } from './modules/clients/management-clients/form-edit-add-client/form-edit-add-client.component';
import { FormEditClientComponent } from './modules/clients/management-clients/form-edit-client/form-edit-client.component';
import { FormDetailClientComponent } from './modules/clients/management-clients/form-detail-client/form-detail-client.component';
import { ManagementGuidesComponent } from './modules/clients/management-guides/management-guides.component';
import { ManagementGuidesV2Component } from './modules/clients/management-guides-v2/management-guides-v2.component';
import { FormEditGuideComponent } from './modules/clients/management-guides-v2/form-edit-guide/form-edit-guide.component';
import { FormDetailGuideComponent } from './modules/clients/management-guides-v2/form-detail-guide/form-detail-guide.component';
import { FormAddGuideComponent } from './modules/clients/management-guides-v2/form-add-guide/form-add-guide.component';

import { ManagementOdcComponent } from './modules/clients/management-odc/management-odc.component';

import { FormEditComponent } from './management/form-edit/form-edit.component';
import { ProfileAddComponent } from './management/profile/profile-add/profile-add.component';
import { ProfileEditComponent } from './management/profile/profile-edit/profile-edit.component';
import { BuyGuidesComponent } from './modules/clients/buy-guides/buy-guides.component';
import { PrintComponent } from './modules/clients/print/print.component';
import { PrintDescComponent } from './modules/clients/print/print-desc/print-desc.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManagementComponent,
    MainNavComponent,
    PageNotFoundComponent,
    ClientsComponent,
    MainFooComponent,
    FormEditAddComponent,
    ProfileComponent,
    ManagementClientsComponent,
    FormEditAddClientComponent,
    FormEditClientComponent,
    FormDetailClientComponent,
    ManagementGuidesComponent,
    ManagementGuidesV2Component,
    FormEditGuideComponent,
    FormDetailGuideComponent,
    FormAddGuideComponent,
    PrintComponent,

    ManagementOdcComponent,

    FormEditComponent,
    ProfileAddComponent,
    ProfileEditComponent,
    BuyGuidesComponent,
    PrintDescComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    routing,
    ReactiveFormsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
