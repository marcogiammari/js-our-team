// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

teamMembersArrays = [
    ["Wayne Barnett", "Founder & CEO",	"wayne-barnett-founder-ceo.jpg"], 
    ["Angela Caroll", "Chief Editor",	"angela-caroll-chief-editor.jpg"],
    ["Walter Gordon", "Office Manager",	"walter-gordon-office-manager.jpg"],
    ["Angela Lopez", "Social Media Manager", "angela-lopez-social-media-manager.jpg"],
    ["Scott Estrada", "Developer",	"scott-estrada-developer.jpg"],
    ["Barbara Ramos", "Graphic Designer",	"barbara-ramos-graphic-designer.jpg"]
];

teamMembersObjects = [];

function addMember(name, role, picture) {
    let member = {
        "name": name,
        "role": role,
        "picture": picture
    }
    teamMembersObjects.push(member)
    console.log(member)
}

for (let i = 0; i < teamMembersArrays.length; i++) {
    const m = teamMembersArrays[i];
    addMember(m[0], m[1], m[2])
}

console.log(teamMembersObjects)
