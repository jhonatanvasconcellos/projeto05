import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edita-contato',
  templateUrl: './edita-contato.page.html',
  styleUrls: ['./edita-contato.page.scss'],
})
export class EditaContatoPage implements OnInit {
  email: string;
  nome: string;
  telefone: string;

  id: string;

  constructor(private service: ContatoService,
    private nav: NavController,
    private rota:ActivatedRoute) { }

  ngOnInit() {
    this.email = this.rota.snapshot.params["emailcontato"];
    this.nome = this.rota.snapshot.params["nomecontato"];
    this.telefone = this.rota.snapshot.params["telcontato"];
    this.id = this.rota.snapshot.params["idcontato"];
  }

  
  cadastrar() {
    console.log("Função cadastrar");
    console.log(this.email);
    console.log(this.nome);
    console.log(this.telefone);

    let contato = {}
    contato['email'] = this.email;
    contato['nome'] = this.nome;
    contato['telefone'] = this.telefone;
    console.log(contato);


    if(this.id == null){
      this.service.incluir(contato);
    } else{ 
    this.service.alterar(this.id,contato);
  }
    
    this.nav.navigateForward("contatos");
  }

}
