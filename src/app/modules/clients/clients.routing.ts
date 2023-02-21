import { ReportsAddComponent } from './reports-page/reports-add/reports-add.component';
import { ReportsPageComponent } from './reports-page/reports-page.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ManagementClientsComponent } from './management-clients/management-clients.component';
import { FormEditAddClientComponent } from './management-clients/form-edit-add-client/form-edit-add-client.component';
import { FormEditClientComponent } from './management-clients/form-edit-client/form-edit-client.component';
import { FormDetailClientComponent } from './management-clients/form-detail-client/form-detail-client.component';

import { ManagementGuidesComponent } from './management-guides/management-guides.component';
import { ManagementGuidesV2Component } from './management-guides-v2/management-guides-v2.component';
import { FormAddGuideComponent } from './management-guides-v2/form-add-guide/form-add-guide.component';
import { FormEditGuideComponent } from './management-guides-v2/form-edit-guide/form-edit-guide.component';
import { FormDetailGuideComponent } from './management-guides-v2/form-detail-guide/form-detail-guide.component';

import { ManagementOdcComponent } from './management-odc/management-odc.component';
import { BuyGuidesComponent } from './buy-guides/buy-guides.component';

import { PrintComponent } from './print/print.component';
import { PrintDescComponent } from './print/print-desc/print-desc.component';

import { AvailableGuidesComponent } from './available-guides/available-guides.component';
import { BillingComponent } from './billing/billing.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'clients',
        // canActivate: [AuthGuard],
        children: [
            { path: 'management-clients', component: ManagementClientsComponent },
            { path: 'formAddClient', component: FormEditAddClientComponent },
            { path: 'formEditClient', component: FormEditClientComponent },
            { path: 'formDetailClient', component: FormDetailClientComponent },
            { path: 'management-guides', component: ManagementGuidesComponent },
            { path: 'management-guides2', component: ManagementGuidesV2Component },
            { path: 'formAddGuide', component: FormAddGuideComponent },
            { path: 'formEditGuide', component: FormEditGuideComponent },
            { path: 'formDetailGuide', component: FormDetailGuideComponent },
            { path: 'management-odc', component: ManagementOdcComponent },
            { path: 'buy-guides', component: BuyGuidesComponent },
            { path: 'reports', component: ReportsPageComponent },
            { path: 'reports-add', component: ReportsAddComponent },
            { path: 'reports-edit', component: ReportsAddComponent },
            { 
                path: 'print-guides', 
                    children: [
                        { path: '', component: PrintComponent },
                        { path: 'detail', component: PrintDescComponent },
                    ]
            },
            { path: 'available-guides', component: AvailableGuidesComponent },
            { path: 'billing', component: BillingComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule { }
