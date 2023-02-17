import { RouterModule } from '@angular/router';
import { LoginComponent } from './_public/login/login.component';
import { HomeComponent } from './_public/home/home.component';
import { ManagementComponent } from './modules/management/management.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FormEditAddComponent } from './modules/management/form-edit-add/form-edit-add.component';

import { ProfileComponent } from './modules/management/profile/profile.component';
import { FormEditComponent } from './modules/management/form-edit/form-edit.component';
import { ProfileAddComponent } from './modules/management/profile/profile-add/profile-add.component';
import { ProfileEditComponent } from './modules/management/profile/profile-edit/profile-edit.component';
import { CartComponent } from './_public/home/cart/cart.component';
import { NewAccountComponent } from './_public/login/new-account/new-account.component';

const appRoutes = [
  // clients: ClientsRoutingModule
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'management', component: ManagementComponent},
  { path: 'form', component: FormEditAddComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'form-edit', component: FormEditComponent },
  { path: 'profile-add', component: ProfileAddComponent },
  { path: 'profile-edit', component: ProfileEditComponent },
  { path: 'cart', component: CartComponent },
  { path: 'create-user', component: NewAccountComponent },
  { path: '**', component: PageNotFoundComponent },

];

export const routing = RouterModule.forRoot(appRoutes);
