import { Payload } from './Payload';
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name : string , totalCapacityKg : number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sum = 0;

        items.forEach(item => sum += item.massKg);

        return sum;
    }

    currentMassKg(): number {
        let sum = 0;

        sum = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);

        return sum;
    }

    canAdd(item: Payload): boolean {
        return item.massKg + this.currentMassKg() <= this.totalCapacityKg;
    }

    addCargo(cargo : Cargo): boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut) : boolean {
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}