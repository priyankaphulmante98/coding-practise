let container = document.getElementById("container");

async function games() {
  let res = await fetch("https://www.balldontlie.io/api/v1/games");
  let data = await res.json();
  console.log(data.data[0]);
  displayData(data.data);
}
games();

function displayData(arr) {
  container.innerHTML = null;
  arr.forEach((e) => {
    let box1 = document.createElement("div");
    box1.setAttribute("id", "box1");

    let img1 = document.createElement("img");
    img1.src = "./images/download.jpg";

    let t1 = document.createElement("h2");
    let heading=document.createElement("div")
    heading.style.width="400px";
    heading.style.border="10px solid red"

    let sp1 = document.createElement("span");
    sp1.setAttribute("id", span);
   
  
    
    let res = e.home_team_score > e.visitor_team_score ? "WON" : "LOST";
    sp1.innerText = res ;
   
    t1.innerText = `${e.home_team.full_name} ${heading.innerText}`;
    // t1.style.color="red";
    sp1.style.color="green";
    heading.append(t1,sp1)
 
    

    let Date = document.createElement("p");
    let u = e.date.split("T");
    Date.innerText = `Date :${u[0]}`;

    let season = document.createElement("p");
    season.innerText = e.season;

    let Status = document.createElement("p");
    Status.innerText = e.status;

    let home_teamscore = document.createElement("p");
    home_teamscore.inneText = e.home_team_score;

    let divison = document.createElement("p");
    divison.innerText = e.home_team.division;

    box1.append(img1, heading, Date, season, Status, home_teamscore, divison);

    //box2

    let box2 = document.createElement("div");
    box1.setAttribute("id", "box2");

    let img2 = document.createElement("img");
    img2.setAttribute("src", `./images/download.jpg`);

    let t2 = document.createElement("h2");

    let sp2 = document.createElement("span");

    sp2.innerText = res == "WON" ? "LOST" : "WON";
    t2.innerText = ` ${e.visitor_team.full_name} ${sp2.innerText}`;
    t2.style.color ="green";

    let Date2 = document.createElement("p");
    let u2 = e.date.split("T");
    Date2.innerText = `Date :${u2[0]}`;

    let s2 = document.createElement("p");
    s2.innerText = e.season;

    let status2 = document.createElement("p");
    status2.innerText = e.status;

    let home_teamscore2 = document.createElement("p");
    home_teamscore2.inneText = e.visitor_team_score;

    let divison2 = document.createElement("p");
    divison2.innerText = e.visitor_team.division;

    box2.append(img2, t2, Date2, s2, status2, home_teamscore2, divison2);

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.append(box1, box2);
    container.append(card);
  });
}
