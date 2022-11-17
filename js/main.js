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
let studenti = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"   
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"        
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        image: "scott-estrada-developer.jpg"   
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"         
    }
]

for(let studente of studenti){
    console.log(studente);
}