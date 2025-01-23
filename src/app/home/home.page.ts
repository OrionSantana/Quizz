import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  name = new FormControl('', [Validators.required, Validators.minLength(1)]);
  dateS = new FormControl('', [Validators.required, Validators.minLength(1)]);
  dateE = new FormControl('', [Validators.required, Validators.minLength(1)]);
  location = new FormControl('', [Validators.required, Validators.minLength(1)]);
  nameE = new FormControl('', [Validators.required, Validators.minLength(1)]);
  phoneE = new FormControl('', [Validators.required, Validators.maxLength(10)]);

  eventos: {id: number,name: string,dateS: string,dateE: string,location: string,confirm: boolean, nameE: string,phoneE: string}[] = [];

  constructor() {}

  cEvento(){
    if (this.vEvento()){
      this.eventos.push({
        id: this.eventos.length,
        name: this.name.value!,
        dateS: this.dateS.value!,
        dateE: this.dateE.value!,
        location: this.location.value!,
        confirm: false,
        nameE: this.nameE.value!,
        phoneE: this.phoneE.value!
      });
    }else{
      alert('Inserte un valor valido en cada espacio');
    }
  }

  Confirm(id: number){
    if (this.eventos[id].confirm == false) this.eventos[id].confirm = true;
    else this.eventos[id].confirm = false;
  }

  vEvento(): boolean{
    return this.name.valid && this.dateS.valid && this.dateE.valid && this.location.valid && this.nameE.valid && this.phoneE.valid;
  }

}
