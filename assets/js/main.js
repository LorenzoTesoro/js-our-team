/* Consegna:
 Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

// MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
// dichiaro un array e ci inserisco gli ogg. con i dati seguenti (nome, ruolo, foto)

const members = [
    {
        name:'Wayne Barnett',
        role: 'Founder & CEO',
        image:'./assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name:'Angela Carroll',
        role: 'Chief Editor',
        image:'./assets/img/angela-caroll-chief-editor.jpg'
    },
    {
        name:'Walter Gordon',
        role: 'Chief Editor',
        image:'./assets/img/walter-gordon-office-manager.jpg'
    },
    {
        name:'Angela Gordon',
        role: 'Social Media Manager',
        image:'./assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
        name:'Scott Estrada',
        role: 'Developer',
        image:'./assets/img/scott-estrada-developer.jpg'
    },
    {
        name:'Barbara Ramos',
        role: 'Graphic Designer',
        image:'./assets/img/barbara-ramos-graphic-designer.jpg'
    }
]

console.log(members);
// MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
   // ciclo for nell'array + console log(nome, ruolo, foto)

// MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
 // selezionare elemento della dom (queryselector), stampare ciò che avevo nel log precedente all'interno dell'elemento che ho selezionato
