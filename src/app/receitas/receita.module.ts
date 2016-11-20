import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ReceitaComponent }   from './receita.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule, 
        RouterModule, 
        HttpModule
    ],
    exports: [ ReceitaComponent, ReceitaFormComponent ],
    declarations: [ ReceitaComponent, ReceitaFormComponent ],
    providers: [],
})
export class ReceitaModule { }
