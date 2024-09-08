// pegando a lista fora da função para ter um escopo global e usar em outras funções e não repetir toda vez que a função for chamada
let lista = document.getElementById('lista');

// função para adicionar tarefas
function Add() {
  // pegando o valor do input
  let TaskInput = document.getElementById('task-name');
  // verificando se esta vazio
  if (!TaskInput.value) {
    alert('para adicionar uma tarefa, digite o nome dela')
  }
  else {
    // criando os elementos
    let li = document.createElement('li');
    let conclude = document.createElement('button');
    // definindo a class e o atributo onclick do botão
    conclude.classList.add('conclude');
    conclude.onclick = function() {
      lista.removeChild(li);
    };
    // definindo o textcontent dos dois elementos
    conclude.textContent = '✔';
    li.textContent = TaskInput.value;
    // inserindo o li dentro da lista e o botão dentro do li
    li.appendChild(conclude);
    lista.appendChild(li);
    // limpando o input
    TaskInput.value = "";
  }
};

// função para conferir a tecla apertada
function keyboard(event) {
  if (event.keyCode === 13) {
    Add();
  };
};
// adicionando o listener
document.addEventListener('keypress', keyboard);