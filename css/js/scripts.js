const buscarInput = document.querySelector('#buscar_bar')
const btn_buscar = document.querySelector('#btn_buscar')
const masculino = document.querySelector('#masculino')
const feminino = document.querySelector('#feminino')
const soma_idades = document.querySelector('#soma_idades')
const media_idades = document.querySelector('#media_idades')

const api = {
    baseUrl: 'https://randomuser.me/api',
    get:async(params) => {
        let resultado = await fetch(api.baseUrl + params);
        resultado = await resultado.json();
        return resultado.resultados;
    }
}