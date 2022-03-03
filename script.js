const inputNom = document.querySelector("#nom");
const btn = document.querySelector(".btn");
const divResultat = document.querySelector("#resultat");
let tab = [
    { nom : "Flouki",age : 25 },
    { nom : "Youps",age : 22 },
    { nom : "Stouny",age : 32 },
    { nom : "Mina",age : 32 },
];

btn.addEventListener("click", function(){
    tab.map(person => {
        if(inputNom.value === person.nom){
            tab.splice(tab.indexOf(person),1);
            divResultat.innerHTML = displayPerson();
        }
    });
    inputNom.value = "";
});

function displayPerson(){
    let listPerson = "<ul>";
    for(let person of tab){
        listPerson += `<li>${person.nom} - ${person.age}</li>`;
    }
    listPerson += "</ul>";
    return listPerson;
}

