import { levels } from "./levels.enum";



export class Task {
    name = '';
    descripcion = '';
    completed = false;
    level = levels.NORMAL;

    constructor(name, descripcion, completed, level){
        this.name = name;
        this.descripcion = descripcion;
        this.completed = completed;
        this.level = level;
    }
}

