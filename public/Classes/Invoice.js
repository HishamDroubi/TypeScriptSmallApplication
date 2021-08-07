export class Invoice {
    // client:string;
    // amount:number;
    // details:string;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client=client;
        // this.amount=amount;
        // this.details=details;
    }
    format() {
        return ` ${this.client} owes ${this.amount} for ${this.details}  `;
    }
}
