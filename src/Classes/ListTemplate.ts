import { HasFormatter } from "../Interfaces/HasFormatter";


export class ListTemplate{

    constructor(public container:HTMLUListElement){

    }

    render(item :HasFormatter, header:string,position:'start'|'end'){
        let li=document.createElement('li');

        let h4=document.createElement('h4');
        h4.innerHTML=header;
        li.append(h4);

        let p=document.createElement('p');
        p.innerHTML=item.format();
        li.append(p);

        if(position=='start')
         this.container.prepend(li);
         else
         this.container.append(li);
    }

}