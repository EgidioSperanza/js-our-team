const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
  
  const teamContainer = document.querySelector(".team-container");
  const addBtn = document.getElementById("addMemberButton");
  const newMemberName = document.getElementById("name").value;
  const newMemberRole = document.getElementById("role").value;
  let countNewMember = 1;

  function createCard(){
    for (i=0; i<team.length;i++){
      let card= team[i];
      let teamCard =  document.createElement("div");
      teamCard.className=("team-card");
      teamContainer.append(teamCard)
      let cardImg = document.createElement("div");
      cardImg.className=("card-image");
      teamCard.append(cardImg);
      let img=document.createElement("img");
      img.src=`img/${card.image}`;
      img.alt=card.name;
      cardImg.append(img);
      let cardText=document.createElement("div");
      cardText.className=("card-text");
      teamCard.append(cardText);
      let teamMember = document.createElement("h3");
      teamMember.innerText=card.name;
      cardText.append(teamMember);
      let cardRole=document.createElement("p");
      cardRole.innerText=card.role;
      cardText.append(cardRole);
    }
  }

  createCard();

  addBtn.addEventListener("click", function(){
    countNewMember<4 ? countNewMember++ : countNewMember=1;

    let newTeamMember={
      name: newMemberName,
      role: newMemberRole,
      image: `new-team-member-0${countNewMember}.jpg`
    }
    team.push(newTeamMember);
    teamContainer.innerHTML="";
    createCard();
  })
  

