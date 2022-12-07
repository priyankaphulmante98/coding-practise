// https://www.balldontlie.io/api/v1/players

async function getPlayers() {
  //   var player = fetch("https://www.balldontlie.io/api/v1/players").then(res =>res.json()).then(res =>console.log(res))
  let res = await fetch("https://www.balldontlie.io/api/v1/players");
  let data = await res.json();
  //    console.log(data.data)
  displayData(data.data);
  return data.data;
}
getPlayers();
let container = document.getElementById("container");
function displayData(data) {
  container.innerHTML = null;

  data.forEach((e) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "data:image/png;base64,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"
    );
    div.append(img);

    let name = document.createElement("h3");
    name.innerText = e.first_name;

    let position = document.createElement("p");
    position.innerText = e.position;

    let btn = document.createElement("button");
    btn.addEventListener("click", () => {
      handlePopup(e);
    });
    btn.innerText = "TEAM DETAILS";

    div.append(img, name, position, btn);

    container.append(div);
  });
}

function handlePopup(playerdata) {
  document.querySelector(".modal").style.display = "block";
  let close = document.querySelector(".close");
  close.addEventListener("click", handleClose);
  console.log(playerdata, "playerdata");
 
  const {
    first_name,
    last_name,
    position,
    team: { full_name, conference, division, abbreviation, city },
  } = playerdata;

  let name = (document.getElementById("name").innerText = `Name:${first_name}`);
  let pos = (document.getElementById(
    "position"
  ).innerText = `Position:${position}`);

  let team = (document.getElementById("team").innerText = `Team:${full_name}`);
  let abbr = (document.getElementById(
    "abbr"
  ).innerText = `Abbr:${abbreviation}`);
  let conf = (document.getElementById(
    "conference"
  ).innerText = `Conference:${conference}`);
  let div = (document.getElementById(
    "division"
  ).innerText = `Division:${division}`);
  let cty = (document.getElementById("city").innerText = `City:${city}`);

  function handleClose() {
    document.querySelector(".modal").style.display = "none";
  }
}

// search
// let searchbtn = document.getElementById("searchbtn");
// searchbtn.addEventListener("click", handleSearch);

let input=document.getElementById("search");
input.addEventListener("input", handleSearch)
async function handleSearch() {
  let text = document.getElementById("search").value;
  console.log(text)
  let data = await getPlayers();
  // console.log(data)
  let sercheddata = data.filter((e) =>{
   let name= e.first_name.toLowerCase()

   let searchtext=text.toLowerCase()
   return name.includes(searchtext)
  });
  console.log(sercheddata,"search");
  displayData(sercheddata);
}
// console.log(window)





// data fetch 
//login
//append data
//filtering
//sorting

