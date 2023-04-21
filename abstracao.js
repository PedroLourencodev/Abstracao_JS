class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  
  ligar() {
    console.log(`O ${this.modelo} da marca ${this.marca} foi ligado.`);
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, cor) {
    super(marca, modelo, ano);
    this.cor = cor;
  }
  
  acelerar() {
    console.log(`O ${this.modelo} está acelerando.`);
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, ano, cilindrada) {
    super(marca, modelo, ano);
    this.cilindrada = cilindrada;
  }
  
  empinar() {
    console.log(`A ${this.marca} ${this.modelo} está empinando.`);
  }
}

const carro1 = new Carro("Ford", "Fusion", 2019, "preto");
const moto1 = new Moto("Honda", "CBR600RR", 2021, 600);
const carro2 = new Carro("Chevrolet", "Onix", 2022, "branco");

console.log(carro1.ano); 
console.log(moto1.cilindrada); 
carro2.ligar();
moto1.empinar(); 
