let registerddata = JSON.parse(localStorage.getItem("data"))||[];
console.log(registerddata, "dashboard");
let tbody = document.querySelector("tbody");
let popup = document.querySelector(".container");
let filterdata=registerddata;


let str = "";
displayData(registerddata)

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
  let otp = document.createElement("td");
  otp.innerText = Math.floor(1000 + Math.random() * 9000);

  
  

  let td6=document.createElement("td");
  td6.innerText="Delete";
  td6.style.color = "red";
  td6.style.cursor = "pointer";
  td6.addEventListener("click",function(){
      deletebtn(e,index);
  })
  

  let td7 = document.createElement("td");
  td7.innerText = "vaccinate";
  td7.style.color = "green";
  td7.style.cursor = "pointer";
  td7.addEventListener("click", vaccinatedbtn);
  function vaccinatedbtn() {
    popup.style.display = "block";

    let otpverify = document.querySelector(".customBtn");
    otpverify.addEventListener("click", ()=>{
      otpbtn1(e,index)

    });

    function otpbtn1(ele,ind) {
     console.log(ele)
      let i = 1;
      
      console.log(str == otp.innerText);
      if (str == otp.innerText) {
        popup.style.display = "none";
        let time = setInterval(() => {
          if (i == 1) {
            alert(`${e.name} Added to Queue`);
          } else if (i == 5) {
            alert(`Vaccinating  ${e.vaccine}`);
          } else if (i == 10) {
            alert(`${e.name} Vaccinated`);
            clearInterval(time);
            vaccinedata(ele,ind);
            // vdata.push(ele)
            // localStorage.setItem("vaccinated",JSON.stringify(vdata))
           function vaccinedata(ele,ind){
            let vdata=JSON.parse(localStorage.getItem("vaccinated")) || []
            vdata.push(ele);
            localStorage.setItem("vaccinated", JSON.stringify(vdata))
            deletebtn(ele,ind)
           }
          }

          i++;
        }, 1000);
      } else {
        alert("enter correct otp");
      }
      str = "";
      // deletebtn(ele,ind)
    }
  }



  tr.append(td1, td2, td3, td4, td5, otp, td7, td6 );
  tbody.append(tr);
});
}

function deletebtn(e,index){
  registerddata.splice(index,1);
  localStorage.setItem("data",JSON.stringify(registerddata));
  window.location.reload();
//  let local= localStorage.setItem("trash",JSON.stringify(e));
}

let digitValidate = function (ele) {
  str += ele.value;
  console.log(ele.value);
  ele.value = ele.value.replace(/[^0-9]/g, "");
};

let tabChange = function (val) {
  let ele = document.querySelectorAll("input");
  if (ele[val - 1].value != "") {
    ele[val].focus();
  } else if (ele[val - 1].value == "") {
    ele[val - 2].focus();
  }
};



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

