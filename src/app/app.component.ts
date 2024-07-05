import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // referencia al archivo html
  styleUrl: './app.component.css' // referencia al archivo css
})
export class AppComponent {
  public title:string = 'Hola Angular';
}
