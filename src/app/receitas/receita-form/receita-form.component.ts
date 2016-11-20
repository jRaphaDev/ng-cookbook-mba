import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mba-receita-form',
    templateUrl: 'receita-form.component.html'
})
export class ReceitaFormComponent implements OnInit {

    private receita = {nome: '', ingredientes: [{nome: '', quantidade: ''}], preparo:[{descricao:''}] };

    constructor() { }

    ngOnInit() { }



}