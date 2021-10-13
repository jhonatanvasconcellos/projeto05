import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private nav: NavController) { 


    //RegistroCliente() {
     // console.log("Função RegistroCliente");
    //  this.nav.navigateForward("contato");
    //}
  
   // RegistroServico() {
    //  console.log("Função RegistroServico");
     // this.nav.navigateForward("servico");
   // }

  }

  ngOnInit() {
  }

}
