let vdata = JSON.parse(localStorage.getItem("vaccinated"))||[];
console.log(vdata, "dashboard");
let tbody = document.querySelector("tbody");
let popup = document.querySelector(".container");
let filterdata=vdata;

let str = "";
displayData(vdata)

function displayData(data){
  document.getElementById("tbody").innerHTML=null
data.forEach((e, index) => {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = e.name;

  let td2 = document.createElement("td");
  td2.innerText = e.age;
  let td3 = document.createElement("td");
  td3.innerText = e.des;
  let td4 = document.createElement("td");
  td4.innerText = e.priority;
  let td5 = document.createElement("td");
  td5.innerText = e.vaccine;
 
 

  // function deletebtn(e,ind){
  //   vdata.splice(ind,1)
  //   localStorage.setItem("data",JSON.stringify(vdata))
// }

  tr.append(td1, td2, td3, td4, td5 );
  tbody.append(tr);
});
}

//  filter and sorting

// filter by priority
let filterpriority=document.getElementById("fpriority")
filterpriority.addEventListener("change",fpfun)
function fpfun(){
  let val=filterpriority.value
 let data= filterdata.filter(e=>e.priority==val)
console.log(data)
displayData(data)

}

// filterby vaccine
let fvaccine= document.getElementById("fvaccine")
fvaccine.addEventListener("change",()=>{
  console.log(fvaccine.value)
  let val= fvaccine.value;
  let data = filterdata.filter(e=>e.vaccine==val)
  console.warn(data,"fvaccine")
  displayData(data)
})



//filter by age
let fage=document.getElementById("fage")
fage.addEventListener("change",fagefun)
// let btnval=fage.innerText
function fagefun(){
  btnval=fage.value
  console.log(btnval)
  if(btnval=="asc"){
    filterdata.sort((a,b)=>a.age-b.age)
    displayData(filterdata)
 
  }
  if(btnval=="dsc"){
    filterdata.sort((a,b)=>b.age-a.age)
    displayData(filterdata)
   
  }

}

