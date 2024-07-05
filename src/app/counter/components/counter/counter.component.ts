import { Component } from "@angular/core";
import { AppComponent } from "../../../app.component";

@Component({ // Decorador para que sirva como componente
    selector: 'app-counter', // Nombre del componente
    template: `<h3>{{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>`
})

export class CounterComponent {
    public title: string = 'Hola Angular';
    public counter: number = 0;

    increaseBy(value: number): void {
        this.counter += value;
    }

    reset(): void {
        this.counter = 0;
    }
}