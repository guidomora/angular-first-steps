import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'}) // decorador que indica que es un servicio y que se puede inyectar en cualquier parte de la aplicación
export class DbzService {

    public character: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }]

    public onNewCharacter(character:Character):void{
        const newCharacter:Character = {
            id: uuid(),
           ...character
        }
       this.character.push(newCharacter);
       
    }

    public onDeleteCharacter(id:string):void{
        // this.character.splice(index, 1);
        this.character = this.character.filter(character => character.id !== id);
    }
    constructor() { }
    
}