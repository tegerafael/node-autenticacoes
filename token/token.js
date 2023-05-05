import jwt from "jsonwebtoken";

const chaveSecreta = "chaveSuperSecreta";

const token = jwt.sign(
  {
    apelido: "tg",
    curso: "node-autenticacoes",
  },
  chaveSecreta
);

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);
