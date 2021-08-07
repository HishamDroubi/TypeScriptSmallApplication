import {Invoice} from "./Classes/Invoice.js";
import {Payment} from "./Classes/Payment.js";
import {ListTemplate} from "./Classes/ListTemplate.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

let form=document.querySelector('form')!;

let typeSelect=document.querySelector('select')!;

let inputs=document.querySelectorAll('input')!;
let toFromInput=inputs[0];
let detailsInput=inputs[1];
let amountInput=inputs[2];


let obj:HasFormatter;

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let values:[string ,string,number];
    values=[toFromInput.value,detailsInput.value,amountInput.valueAsNumber];

    if(typeSelect.value==='invoice'){
      obj=new Invoice(...values);
    }
    else{
      obj=new Payment(...values);
    }
    
    let ul=document.querySelector("ul")!;
    let lt=new ListTemplate(ul);
    lt.render(obj,toFromInput.value,'start');
})



