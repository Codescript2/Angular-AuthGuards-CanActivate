import { Routes } from '@angular/router';
import { NormalViewComponent } from './views/normal-view/normal-view.component';
import { SuccessViewComponent } from './views/success-view/success-view.component';
import { DeniedViewComponent } from './views/denied-view/denied-view.component';
import { AdminChildComponent } from './views/admin-child/admin-child.component';
import { StandardChildComponent } from './views/standard-child/standard-child.component';
import { canActivate, CanActivateService } from './services/can-activate.service';
import { CanActivateChildService } from './services/can-activate-child.service';
import { ChildData } from './interfaces/child-data.interface';
import { messageResolve } from './services/messages.service';

export const routes: Routes = [
    { 
        path: 'normal-view',
        component: NormalViewComponent,
        resolve: {messageResolver: messageResolve}
    },
    { 
        path: 'success-view',
        component: SuccessViewComponent,
        canActivate: [canActivate],
        canActivateChild: [CanActivateChildService],
        children: [
            {path: 'admin', component: AdminChildComponent, data: { roles: ['Admin'] } as ChildData},
            {path: 'standard', component: StandardChildComponent, data: { roles: ['Admin', 'Empleado', 'Gerente'] } as ChildData}
        ]
    },
    { path: 'denied-view', component: DeniedViewComponent },
    { path: '', pathMatch: 'full', redirectTo: 'normal-view' },
    { path: '**', redirectTo: 'denied-view' }
];
