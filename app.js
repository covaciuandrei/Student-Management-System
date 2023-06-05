
const studenti = [
    {ID:1, nume:"Covaciu", prenume:"Andrei", materia:"Bio", nota:5 }
];
let elev_nou = {ID:2, nume:"Dancau", prenume:"Sebi", materia:"Mate", nota:8 }
studenti.push(elev_nou);

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
console.log(table)

console.log(studenti);
