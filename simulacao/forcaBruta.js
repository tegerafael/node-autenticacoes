import { createHash } from "crypto";

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criaHash(senha);
  }

  criaHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash == this.criaHash(senha)) {
      console.log("Usuário cadastrado com sucesso");
      return true;
    } else {
      //console.log("Usuário ou senha incorretos");
    }
  }
}

const usuario = new Usuario("Tiago Rafael", "1337");

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste ++){
    if(usuario.autentica("Tiago Rafael", senhaTeste.toString())){
        console.log(`A senha do usuário é ${senhaTeste}`);
    }
}