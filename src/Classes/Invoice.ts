import{HasFormatter} from "../Interfaces/HasFormatter.js";

export class Invoice implements HasFormatter{
    // client:string;
    // amount:number;
    // details:string;

    constructor(
        public client:string,
        public details:string,
        public amount:number
        ){
        // this.client=client;
        // this.amount=amount;
        // this.details=details;
    }

    format(){
        return ` ${this.client} owes ${this.amount} for ${this.details}  `;
    }
}

