import { Invoice } from "./Classes/Invoice.js";
import { Payment } from "./Classes/Payment.js";
import { ListTemplate } from "./Classes/ListTemplate.js";
let form = document.querySelector('form');
let typeSelect = document.querySelector('select');
let inputs = document.querySelectorAll('input');
let toFromInput = inputs[0];
let detailsInput = inputs[1];
let amountInput = inputs[2];
let obj;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber];
    if (typeSelect.value === 'invoice') {
        obj = new Invoice(...values);
    }
    else {
        obj = new Payment(...values);
    }
    let ul = document.querySelector("ul");
    let lt = new ListTemplate(ul);
    lt.render(obj, toFromInput.value, 'start');
});
