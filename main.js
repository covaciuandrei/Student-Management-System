let studenti = JSON.parse(localStorage.getItem('studenti')) || [];
console.log(studenti);

const reset_table = () =>{
    //const table = document.getElementById("tabel_studenti");
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = ''; // Remove all existing rows
};

const buton_cautare = document.getElementById("buton");

buton_cautare.addEventListener('click', e =>{
    e.preventDefault();
    const id_cautare = document.getElementById("search-form");
    let valoareID = id_cautare.value
    let found = false;
    const array = [];

    const tbody = document.getElementById("tbody");



    reset_table();

    studenti.forEach(element => {
        if(element.ID == valoareID){
            console.log(element);
            found = true;
            array.push(element);
        }

    });
    if(found!=true)
        alert("Nu exista niciun elev cu acest ID");

    console.log(array);


    
//     const studentii = [
//   { ID: 1, nume: "Covaciu", prenume: "Andrei", materia: "Bio", nota: 5 },
// ];




array.forEach(student =>{
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
        
});




