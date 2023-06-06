// const studenti = [
//   { ID: 1, nume: "Covaciu", prenume: "Andrei", materia: "Bio", nota: 5 },
// ];
let studenti = JSON.parse(localStorage.getItem('studenti')) || [];
// let elev_nou = {
//   ID: 2,
//   nume: "Dancau",
//   prenume: "Sebi",
//   materia: "Mate",
//   nota: 8,
// };
// studenti.push(elev_nou);

const table = document.getElementById("tabel_studenti");
const tbody = document.getElementById("tbody");

// studenti.forEach(student =>{
//     let row = document.createElement("tr");

//     let ID = document.createElement("td");
//     ID.textContent = student.ID;
//     row.appendChild(ID);

//     let nume = document.createElement("td");
//     nume.textContent = student.nume;
//     row.appendChild(nume);

//     let prenume = document.createElement("td");
//     prenume.textContent = student.prenume;
//     row.appendChild(prenume);

//     let materia = document.createElement("td");
//     materia.textContent = student.materia;
//     row.appendChild(materia);

//     let nota = document.createElement("td");
//     nota.textContent = student.nota;
//     row.appendChild(nota);

//     tbody.appendChild(row);
// })
// console.log(table);

// console.log(studenti);

// const adauga_nota = document.getElementById("adauga");
// adauga_nota.addEventListener("click", ()=>{
//     console.log("a mers");
// })

const adauga_nota = document.getElementById("adauga");

// Add an event listener for the button click
adauga_nota.addEventListener("click", function () {
  console.log("Button clicked!");

    let id = parseInt(document.getElementById("id_student").value);
    let nume = document.getElementById("nume_student").value;
    let prenume = document.getElementById("prenume_student").value;
    let materia = document.getElementById("materia_student").value;
    let nota = parseInt(document.getElementById("nota_student").value);

  let elev_nou = {
    ID: id,
    nume: nume,
    prenume: prenume,
    materia: materia,
    nota: nota,
  };
  studenti.push(elev_nou);
  console.log(studenti);
  localStorage.setItem('studenti', JSON.stringify(studenti));
  alert("Nota adaugata!");
});


