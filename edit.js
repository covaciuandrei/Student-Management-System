const studenti_json = localStorage.getItem("studenti");
const studenti = JSON.parse(studenti_json) || [];
console.log(studenti);

const editForm = document.getElementById("editForm");
const studentNameInput = document.getElementById("studentName");
const studentSurnameInput = document.getElementById("studentSurname");
const studentSubjectInput = document.getElementById("studentSubject");
const studentGradeInput = document.getElementById("studentGrade");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const studentID = urlParams.get("id");

console.log("studentID:", studentID);

const studentToEdit = studenti.find((student) => student.ID == studentID);

console.log("studentToEdit:", studentToEdit);
if (studentToEdit) {
  studentNameInput.value = studentToEdit.nume;
  studentSurnameInput.value = studentToEdit.prenume;
  studentSubjectInput.value = studentToEdit.materia;
  studentGradeInput.value = studentToEdit.nota;
  console.log("studentToEdit:", studentToEdit);
} else {
  // Handle the case where the student is not found
  alert("Student not found. Something went wrong!");
  
}
console.log(studentToEdit);


editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Update the student object with the edited values
  studentToEdit.nume = studentNameInput.value;
  studentToEdit.prenume = studentSurnameInput.value;
  studentToEdit.materia = studentSubjectInput.value;
  studentToEdit.nota = studentGradeInput.value;
  console.log(studentToEdit);
  // Update the local storage
  localStorage.setItem("studenti", JSON.stringify(studenti));

  // Redirect back to the students list page (students.html)
  window.location.href = "edit_grades.html";
});
