import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { FormEditAddComponent } from './management/form-edit-add/form-edit-add.component';
import { ManagementClientsComponent } from './modules/clients/management-clients/management-clients.component';
import { FormEditAddClientComponent } from './modules/clients/management-clients/form-edit-add-client/form-edit-add-client.component';
import { FormEditClientComponent } from './modules/clients/management-clients/form-edit-client/form-edit-client.component';
import { FormDetailClientComponent } from './modules/clients/management-clients/form-detail-client/form-detail-client.component';
import { ManagementGuidesComponent } from './modules/clients/management-guides/management-guides.component';

const appRoutes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'management', component: ManagementComponent},
  { path: 'form', component: FormEditAddComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'management-clients', component: ManagementClientsComponent },
  { path: 'formAddClient', component: FormEditAddClientComponent },
  { path: 'formEditClient', component: FormEditClientComponent },
  { path: 'formDetailClient', component: FormDetailClientComponent },
  { path: 'management-guides', component: ManagementGuidesComponent },
  { path: '**', component: PageNotFoundComponent },
 
];
export const routing = RouterModule.forRoot(appRoutes);
