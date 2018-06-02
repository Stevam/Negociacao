class Negociacao{

    //Criando os atributos da classe negociação por meio da função Contructor, como é feito no ES6
    constructor(data, quantidade, valor){
        
        //Atributos
        //criando uma nova data para evitar que seja alterada
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);

    }
    // Método para realizar o calculo do volume
    get volume() {
        return this._quantidade * this._valor;
    }

    //retornando uma novo objeto baseado na negociacao, para evitar que o objeto data seja alterado.
    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {    
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}