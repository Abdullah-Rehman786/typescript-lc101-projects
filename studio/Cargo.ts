import { Payload } from "./Payload";

export class Cargo implements Payload {
    massKg: number;
    material: string;

    constructor(massKg : number, name : string){
        this.massKg = massKg;
        this.material = name;
    }

}