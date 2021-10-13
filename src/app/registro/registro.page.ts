import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';
import { NavController } from '@ionic/angular';
import { resolve } from 'q';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

email : string;
senha : string;


  constructor(private login: AutenticacaoService,
              private nav:NavController) { }

  ngOnInit() {
  }

  registrar(){
    let usuario = {};
    usuario['email'] = this.email;
    usuario['senha'] = this.senha;

    this.login.registrar(usuario).then(
      resolve => {this.nav.navigateForward("inicio");
    },
      error =>{ console.log("Deu erro");
  }
    );

  }

}
