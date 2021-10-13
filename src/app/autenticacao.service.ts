import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private auth:AngularFireAuth) { }


  registrar(usr){
    return new Promise<any>((resolve,reject)=>{
      this.auth.createUserWithEmailAndPassword(usr.email,usr.senha).then(
        res => resolve(res),
        err => reject(err))
    });
    
  }

logar(usr){
  return new Promise<any>((resolve,reject)=>{
    this.auth.signInWithEmailAndPassword(usr.email,usr.senha).then(
      res => resolve(res),
      err => reject(err))
  });
}

sair(){
  this.auth.signOut();
}

}
