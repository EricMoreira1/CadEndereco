'use strict' //ativa o modo restrito
//esse modo faz com que o java script opere de forma mais segura e rigorosa, ajudando a evitar erros comums de programação /* consumo de api - https://viacep.com.br/*/
 
//função para limpar campos preenchidos
const limparformulario = () => {
    document.getElementById('logradouro').value = endereco.logradouro = '';
    document.getElementById('bairro').value = endereco.bairro = '';
    document.getElementById('localidade').value = endereco.localidade = '';
    document.getElementById('uf').value = endereco.uf = '';
  
}
//verifica se o cep é valido
const enumero = (numero)=> /^[0-9]+$/.test(numero);
const cepvalido = (cep) => cep.length == 8 && eNumero(cep)
 
 
const preencherformulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

// Função para consumo API ViaCEP
const pesquisarCep = async() => {
    limparformulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepvalido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProprety('erro')){
        // hasOwnProperty define verdadeiro ou falso se ele tem uma propriedade no Objeto
            alert('CEP não encontrado');
        }else{
            preencherformulario(adress);
        }
        
         
    }else{alert (`CEP incorreto`)

    }

}

// Chama o escutador para disparar ação de preenchimento
document.getElementById('CEP').addEventListener('focusout',pesquisarCep);    
// fetch faz uma requisição da url, e o guarda como dados
        // await uma requisição de espera