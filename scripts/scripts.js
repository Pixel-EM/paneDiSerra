import receitas from './receitas.js'

window.onload = () => {
    let heads = ['RECEITA','CLIENTE','DATA','PREÇO DE CUSTO','PREÇO DE VENDA']

    function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      }
      
      let table = document.querySelector('table');
      let data = heads;
      generateTableHead(table, data);
}

let addVenda = document.querySelector('#addVenda')
let form = document.querySelector('#addVendaForm')
addVenda.addEventListener('click', ()=> {

  form.style.display == 'none' ? form.style.display = 'flex' : form.style.display = 'none'
  
})
