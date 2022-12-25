let bookedData =JSON.parse(localStorage.getItem('booked'))  || []

let tbody = document.querySelector("tbody");
appendData(bookedData);

function appendData(data) {
  //   console.log(data);
  document.getElementById("tbody").innerHTML = null;
  data.forEach((el, i) => {
    

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = el.name;

    let td2 = document.createElement("td");
    td2.innerText = el.age;

    let td3 = document.createElement("td");
    td3.innerText = el.fromStation;

    let td4 = document.createElement("td");
    td4.innerText = el.toStation;

    let td5 = document.createElement("td");
    td5.innerText = el.date;

    let td6 = document.createElement("td");
    td6.innerText = el.seat;

    let otp = document.createElement("td");
    otp.innerText = el.otp;



    tr.append(
      td1,
      td2,
      td3,
      td4,
      td5,
      td6,
      otp,
    );
    tbody.append(tr);
  });
}
