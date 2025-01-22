// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(persons => createTable(persons));

axios('pessoas.json').then(response => createTable(response.data));

function createTable(persons) {
    const table = document.createElement('table');
    let tr = document.createElement('tr');
    let th = document.createElement('th');

    th = document.createElement('td');
    th.innerHTML = '<h3> Nome </h3>';
    tr.appendChild(th);

    th = document.createElement('td');
    th.innerHTML = '<h3> Idade </h3>';
    tr.appendChild(th);

    th = document.createElement('td');
    th.innerHTML = '<h3> Salário </h3>';
    tr.appendChild(th);

    table.appendChild(tr);

    // td = document.createElement('td');
    // td.innerHTML = '<p> Idade </p>';
    // tr.appendChild(td);

    // td = document.createElement('td');
    // td.innerHTML = '<p> Salário </p>';
    // tr.appendChild(td);


    for (let person of persons) {
        tr = document.createElement('tr');

        let td = document.createElement('td');

        td = document.createElement('td');
        td.innerHTML = person.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = person.salario;
        tr.appendChild(td);

        table.appendChild(tr);

    }

    const result = document.querySelector('.result');
    result.appendChild(table);
}