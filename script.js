const inputTarefa = document.querySelector('#inputTarefa');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const botaoExcluir = document.querySelector('#botaoExcluir');
const listaPendentes = document.querySelector('#listaPendentes');
const listaConcluidas = document.querySelector('#listaConcluidas');


/* ========================================
   ADICIONAR TAREFA
======================================== */

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto === "") {
        alert("Digite um texto válido");
        return;
    }
    /* Criando o item */
    const tarefa = document.createElement('li');

    /* Criando checkbox */
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    /* Criando texto */
    const textoTarefa = document.createElement('span');
    textoTarefa.classList.add('tarefaTexto');
    textoTarefa.textContent = texto;

    /* Montando a tarefa */
    tarefa.appendChild(checkbox);
    tarefa.appendChild(textoTarefa);

    /* Adicionando na lista */
    listaPendentes.appendChild(tarefa);

    /* Quando marcar */
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {

            tarefa.classList.add('concluida');
            listaConcluidas.appendChild(tarefa);

        } else {

            tarefa.classList.remove('concluida');
            listaPendentes.appendChild(tarefa);
        }

    });
    /* Limpando input */
    inputTarefa.value = "";
    inputTarefa.focus();
}


/* ========================================
   EXCLUIR TAREFAS MARCADAS
======================================== */

function excluirTarefa() {

    const tarefas = document.querySelectorAll(
        '.listaPai input[type="checkbox"]:checked'
    );


    tarefas.forEach(function (checkbox) {

        checkbox.parentElement.remove();

    });
}


/* ========================================
   BOTÃO ADICIONAR
======================================== */

botaoAdicionar.addEventListener(
    'click',
    adicionarTarefa
);


/* ========================================
   BOTÃO EXCLUIR
======================================== */

botaoExcluir.addEventListener(
    'click',
    excluirTarefa
);


/* ========================================
   ENTER PARA ADICIONAR
======================================== */

inputTarefa.addEventListener(
    'keydown',
    function (event) {

        if (event.key === 'Enter') {

            adicionarTarefa();

        }

    }
);

