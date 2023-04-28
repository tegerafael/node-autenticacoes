import { createHash } from "crypto";

function criaHash(senha) {
  return createHash("sha256").update(senha).digest("hex");
}

console.log(criaHash("uma String Qualquer"));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash == criaHash(senha)) {
      console.log("Usuário cadastrado com sucesso");
      return true;
    } else {
      console.log("Usuário ou senha incorretos");
    }
  }
}

const usuario = new Usuario("Tiago Rafael", "minhaSenha");

console.log(usuario);

// caso sucesso
usuario.autentica("Tiago Rafael", "minhaSenha");

// caso de fracasso
usuario.autentica("Tiago", "minhaSenha");
usuario.autentica("Tiago", "minhasenha");