/* Consegna:
 Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

// BONUS 1: Trasformare la stringa foto in una immagine effettiva
// BONUS 2: Organizzare i singoli membri in card/schede

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

const rowElement = document.querySelector(".row");

   for(let i = 0; i < members.length; i++){
        const member = members[i];
        const cardsMarkup = generateMarkup(member);
        
        insertMarkup(rowElement, cardsMarkup);
   }
   
// insert cards
function insertMarkup(domElement, markup){
    domElement.insertAdjacentHTML('beforeend', markup);
}

// generate cards
function generateMarkup(object) {
const card =    
    `
    <div class="col">
        <div class="card col">
            <img src="${object.image}">
            <div class="card-body">
                <h2 class="text-center">${object.name}<h2>
                <p class="text-center fs-5 secondary text-secondary">${object.role}</p>
            </div>
        </div>
    </div>
    `
    return card;
}