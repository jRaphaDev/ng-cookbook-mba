import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { NivelComponent } from './niveis/nivel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReceitaComponent } from './receitas/receita.component';
import { ReceitaFormComponent } from './receitas/receita-form/receita-form.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: NivelComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'receitas', component: ReceitaComponent},
    { path: 'receitas/add', component: ReceitaFormComponent},
    { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
