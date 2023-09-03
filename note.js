// const studenti = [
//   { ID: 1, nume: "Covaciu", prenume: "Andrei", materia: "Bio", nota: 5 },
// ];
let studenti = JSON.parse(localStorage.getItem("studenti")) || [];

const resetForm = () => {
  const input_fields = document.querySelectorAll(".input");
  console.log(input_fields);
  input_fields.forEach((input) => (input.value = ""));
  console.log(input_fields);
};

// Add an event listener for the button click
const submitForm = () => {
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
  localStorage.setItem("studenti", JSON.stringify(studenti));

  resetForm();

  alert("Nota adaugata!");
};
