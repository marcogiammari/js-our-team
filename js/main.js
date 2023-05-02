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

// cicla l'array di oggetti
for (let i = 0; i < teamMembersObjects.length; i++) {
    const e = teamMembersObjects[i];
    // crea una card per ogni oggetto 
    card = document.createElement("div");
    card.classList.add("card", "col-3", "p-3");
    // cicla le proprietà dell'oggetto
    for (const key in e) {
        // crea un div per ogni proprietà
        div = document.createElement("div");
        if (key == "picture") {
            image = document.createElement("img");
            image.src = "img/" + e[key];
            image.classList.add("img-fluid")
            div.appendChild(image);
        } else {
            div.innerHTML = (e[key]);
        }
        card.appendChild(div) 
    }
    cont.appendChild(card)
};
