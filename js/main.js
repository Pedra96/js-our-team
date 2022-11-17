/*
esercizio di oggi: Our Team
nome repo: js-our-team
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (BOOTSTRAP!)
*/

let membersTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        image: './img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        image: "./img/angela-caroll-chief-editor.jpg"   
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        image: "./img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        image: "./img/angela-lopez-social-media-manager.jpg"        
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        image: "./img/scott-estrada-developer.jpg"   
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        image: "./img/barbara-ramos-graphic-designer.jpg"         
    }
]

for(let member of membersTeam){
    document.getElementById("teamContainer").innerHTML+=`
    <div class="col-12 col-md-3 m-2 pb-2 bg-dark pt-3 arrotondamento">
    <img src=${member.image} class="card-img-top arrotondamento" alt="...">
    <div class="card-body">
    <h5 class="card-title mt-2">${member.ruolo}</h5>
    <p class="card-text">${member.nome}</p>
    `
}


/*<div class="card" style="width: 18rem;" id="memberImage">
    <div class="card-body">
        <h5 class="card-title" id="memberRuolo"></h5>
        <p class="card-text" id="nomeMember"></p>
    </div>
</div>


console.log(member);
    document.getElementById("nomeMember").innerHTML+=member.nome;
    document.getElementById("memberRuolo").innerHTML+=member.ruolo;
    document.getElementById("memberImage").innerHTML+=member.image;*/