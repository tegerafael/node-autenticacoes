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

const usuario = new Usuario("Tiago Rafael", "senha123");

const senhasComuns = ["senha", "senha123", "123456", "admin", "blink182", "meuAniversario", "senha123456", "brasil", "102030"];

senhasComuns.map( senha => {
  if(usuario.autentica("Tiago Rafael", senha)){
    console.log(`A senha do usuário é ${senha}`);
  }
})