class Pessoa {
  constructor(nome, sobrenome, idade, nacionalidade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nacionalidade = nacionalidade;
  }

  insiraNome(nome) {
    this.nome = nome;
    return this;
    // console.log(`Bem-vindo, ${this.nome}`);
  }

  insiraSobrenome(sobrenome) {
    this.sobrenome = sobrenome;
    return this;
    // console.log(`Seu nome completo é ${this.nome} ${this.sobrenome}`);
  }

  insiraIdade(idade) {
    this.idade = idade;
    return this;
    // console.log(`Você tem ${this.idade} anos`);
  }

  insiraNacionalidade(nacionalidade) {
    this.nacionalidade = nacionalidade;
    return this;

    // console.log(`Você é ${this.nacionalidade}`);
  }

  dadosPessoa() {
      return this;
    //   return {
    //       nome: this.nome,
    //       sobrenome: this.sobrenome,
    //       idade: this.idade,
    //       nacionalidade: this.nacionalidade,
    //   };
  }
}

let primeiroUsuario = new Pessoa();
primeiroUsuario.insiraIdade(10);
console.log(primeiroUsuario);