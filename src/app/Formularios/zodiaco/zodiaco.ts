import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { joinAllInternals } from 'rxjs/internal/operators/joinAllInternals';

@Component({
  imports: [FormsModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',

})
export class Zodiaco {
  nombre:string=''
  edad:string=''
  dia:string=''
  mes:string=''
  ano:string=''
  gen:string=''
  signo:string=''
  presen:string=''

  signoZodiaco():void{
    let anioNum: number = parseInt(this.ano)
    let animal:string=''
    let resuido: number = anioNum %12;

    if (isNaN(anioNum) || anioNum<=0){
      this.signo = 'Por faavor ingrese un año valido';
      return
    }
    else
    if(resuido=== 0){
      this.signo = 'Mono';
    }
    else 
    if(resuido===1){
      this.signo = 'Gallo';
    }
    else 
    if(resuido===2){
      this.signo = 'Perro';
    }
    else 
    if(resuido===3){
      this.signo = 'Cerdo';
    }
    else 
    if(resuido===4){
      this.signo = 'Rata';
    }
    else 
    if(resuido===5){
      this.signo = 'Buey';
    }
    else 
    if(resuido===6){
      this.signo = 'Tigre';
    }
    else 
    if(resuido===7){
      this.signo = 'Conejo';
    }
    else 
    if(resuido===8){
      this.signo = 'Dragon';
    }
    else 
    if(resuido===9){
      this.signo = 'Serpiente';
    }
    else 
    if(resuido===10){
      this.signo = 'Caballo';
    }
    else 
    if(resuido===11){
      this.signo = 'Cabra';
    }
    
    this.presen = 'Hola '+this.nombre+', tu edad es: '+this.edad+' y tu signo es: '+this.signo;
  }
}
