import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {


    constructor(
        // inyeccion de dependencias
       public dbzService: DbzService
       
    ) {}

    get characters():Character[]{
        return [...this.dbzService.character]
    }

    onDeleteCharacter(id:string):void {
        this.dbzService.onDeleteCharacter(id)
    }

    onNewCharacter(character:Character):void{
        this.dbzService.onNewCharacter(character)
    }
}