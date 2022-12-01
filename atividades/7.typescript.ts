class Cliente {
    nome: string;
    dataNascimento: Date;
    endereco: string;

    constructor(nome: string, dataNascimento: Date, endereco: string) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
    }

    getNome(): string {
        return this.nome
    }

    getIdade(): nunber {
        return this.calcularIdade()
    }

    calcularIdade(): number {
        return (this.dataNascimento - Date.now())
    }


}

class Endereco {
    logradouro: string;
    complemento: string;

    constructor(logradouro: string, complemento: string) {
        this.logradouro = logradouro;
        this.complemento = complemento;
    }

    getLogradouro(): string {
        return this.logradouro
    }

    getComplemento(): string {
        return this.complemento
    }

    getEnderecoCompleto(): string {
        return `${this.getLogradouro} ${this.getComplemento}`
    }

}