import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { FormEditAddComponent } from './management/form-edit-add/form-edit-add.component';

const appRoutes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'management', component: ManagementComponent},
  { path: 'form', component: FormEditAddComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '**', component: PageNotFoundComponent },
];
export const routing = RouterModule.forRoot(appRoutes);
