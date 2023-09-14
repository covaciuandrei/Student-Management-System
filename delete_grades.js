const studenti_json = localStorage.getItem("studenti");
const studenti = JSON.parse(studenti_json) || [];

const table = document.getElementById("tabel_studenti");
const tbody = document.getElementById("tbody");
const deleteButton = document.getElementById("deleteButton");

studenti.forEach((student, index) => {
  let row = document.createElement("tr");

  // Create a checkbox for each row
  let checkbox = document.createElement("td");
  let checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkbox.appendChild(checkboxInput);
  row.appendChild(checkbox);
  student.selected = false;

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

  // Attach an event listener to each checkbox to track selection
  //We create a property "selected" for every object of type student from our array.
  checkboxInput.addEventListener("change", () => {
    student.selected = checkboxInput.checked;
    console.log(student.selected);
    console.log(student);
    console.log(studenti);
  });
  checkboxInput.addEventListener("change", () => {
    //we add a property of selected to every student to be able to delete the selected students later
    student.selected = checkboxInput.checked;
  });
});

// Function to delete selected rows from the array and update the table
function deleteSelectedRows() {
  console.log(studenti);
  const selectedStudents = studenti.filter((student) => student.selected);

  console.log(selectedStudents);

  selectedStudents.forEach((student) => {
    //we get what index has the selected student in the studenti array
    const index = studenti.indexOf(student);
    //if it doesn't find any, it will return -1, if it's bigger than -1, we found it in studenti
    if (index > -1) {
        //delete first 1 element at the position index
      studenti.splice(index, 1);
    }
  });

  // Update the localStorage with the modified array
  localStorage.setItem("studenti", JSON.stringify(studenti));

  // Reset the table
  tbody.innerHTML = "";

  //Recreate the table
  studenti.forEach((student, index) => {
    let row = document.createElement("tr");

    let checkbox = document.createElement("td");
    let checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkbox.appendChild(checkboxInput);
    row.appendChild(checkbox);

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

    checkboxInput.addEventListener("change", () => {
      student.selected = checkboxInput.checked;
    });
  });
}

deleteButton.addEventListener("click", deleteSelectedRows);

