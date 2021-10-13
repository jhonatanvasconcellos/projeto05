import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController) {}

  irParaLogin() {
    console.log("Função irParaLogin");
    this.nav.navigateForward("login");
  }

  irParaCadastro() {
    console.log("Função irParaCadastro");
    this.nav.navigateForward("registro");
  }
}
