import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  // EventEmitter es una interfaz de Angular que nos permite emitir eventos
  // para que otros componentes los escuchen. Como es muy flexible, podemos
  // emitir cualquier tipo de dato. En este caso, emitiremos un objeto de tipo Character.
  @Output() // Con el decorador @Output() indicamos que este evento será escuchado por otros componentes
  public onNewCHaracter:EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };
  

  public emitCharacter(): void {
    console.log(this.character);
  
    // debugger; // es como un breakpoint, pero en el código de Angular, se detiene la ejecución

    if (this.character.name.length === 0) return

    // Emitimos el evento con el objeto character
    this.onNewCHaracter.emit(this.character);

    this.character = { name: '', power: 0}
  }
}

