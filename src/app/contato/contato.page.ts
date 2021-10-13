import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from "@ionic/angular";
import { ContatoService } from '../contato.service';
@Component({
  selector: 'app-contatos',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
      contatos:any;
  constructor(private nav: NavController, 
              private servico: ContatoService,
              private alerta: AlertController) { }

  ngOnInit() {
    console.log("Carregando a página...");
    console.log(this.servico.listar());

    this.servico.listar().subscribe(data => {
      this.contatos = data.map(e => {
        return{
          id: e.payload.doc.id,
          email : e.payload.doc.data()['email'],
          nome: e.payload.doc.data()['nome'],
          telefone: e.payload.doc.data()['telefone']

        }
      })

      console.log(this.contatos);
    });
  }

  async excluir(contatos){
    let msg =  await this.alerta.create({header:"Atenção",
      message:"Deseja Realmente Excluir?",
      buttons:[
        {
          text:"Sim",
          handler:() =>{
          this.servico.excluir(contatos);
          }
        },"Não"]
    });
    
      await msg.present();
    //this.servico.excluir(tarefa);
  }


  inicioCadastro(){
    this.nav.navigateForward("edita-contato");
  }

  inicioAlteracao(contato){

    this.nav.navigateForward(["edita-contato", {
      
      emailcontato: contato.email,
      nomecontato: contato.nome,
      telcontato: contato.telefone,
      idcontato: contato.id
    }]);
  }
}
