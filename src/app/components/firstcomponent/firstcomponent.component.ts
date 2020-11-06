import {Component} from '@angular/core';

@Component({
    selector: 'FirstComponent',
    templateUrl: './firstcomponent.component.html'
})
export class FirstComponent{
    titulo: string;
    comentario: string;

    constructor(){
        this.titulo = "Hola mundo, soy un componente nuevo2";
        this.comentario = "esto es un parrafo"
        console.log("El componente esta cargado");
    }
}
