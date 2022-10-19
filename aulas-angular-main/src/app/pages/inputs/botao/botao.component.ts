import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-botao',
    templateUrl: "./botao.component.html"
})

export class BotaoComponent {
    
    @Input()
    textoBotao:string = '';

    @Input()
    cor: string = '';

    @Input()
    altura: string = '';

    @Input()
    largura: string = '';

}