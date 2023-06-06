const studenti_json = localStorage.getItem('studenti');
const studenti = JSON.parse(studenti_json) || [];


const table = document.getElementById("tabel_studenti");
const tbody = document.getElementById("tbody");

studenti.forEach(student =>{
    let row = document.createElement("tr");
    let ID = document.createElement("td");
    ID.textContent = student.ID;
    row.appendChild(ID);

    let nume = document.createElement("td");
    nume.textContent = student.nume;
    row.appendChild(nume);

    let prenume = document.createElement("td");
    prenume.textContent = student.prenume;
    row.appendChild(prenume);

    let materia = document.createElement("td");
    materia.textContent = student.materia;
    row.appendChild(materia);

    let nota = document.createElement("td");
    nota.textContent = student.nota;
    row.appendChild(nota);

    tbody.appendChild(row);
})
console.log(table);

console.log(studenti);

