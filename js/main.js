cont = document.getElementById("container");

const teamMembersArrays = [
    ["Wayne Barnett", "Founder & CEO",	"wayne-barnett-founder-ceo.jpg"], 
    ["Angela Caroll", "Chief Editor",	"angela-caroll-chief-editor.jpg"],
    ["Walter Gordon", "Office Manager",	"walter-gordon-office-manager.jpg"],
    ["Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"],
    ["Scott Estrada", "Developer",	"scott-estrada-developer.jpg"],
    ["Barbara Ramos", "Graphic Designer",	"barbara-ramos-graphic-designer.jpg"]
];

const teamMembersObjects = [];

// aggiunge oggetti membri all'array
function addMember(name, role, picture) {
    const member = {
        "name": name,
        "role": role,
        "picture": picture
    }
    teamMembersObjects.push(member)
}

// cicla l'array di array e costruisce l'array di oggetti
for (let i = 0; i < teamMembersArrays.length; i++) {
    const m = teamMembersArrays[i];
    addMember(m[0], m[1], m[2])
}

// cicla l'array di oggetti e stampa ogni proprietà
for (let i = 0; i < teamMembersObjects.length; i++) {
    const e = teamMembersObjects[i];
    card = document.createElement("div");
    card.classList.add("member-card", "card");
    for (const key in e) {
        div = document.createElement("div")
        div.innerHTML = (e[key]);
        card.appendChild(div) 
    }
    cont.appendChild(card)
};
