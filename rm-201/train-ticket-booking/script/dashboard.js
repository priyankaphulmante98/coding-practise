let registerddata = JSON.parse(localStorage.getItem("data")) || [];
let bookedData =JSON.parse(localStorage.getItem('booked'))  || []
let tbody = document.querySelector("tbody");
displayData(registerddata);

function displayData(data) {
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

    let deleteButton = document.createElement("td");
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = "1.2rem";
    deleteButton.style.fontWeight = "bold";

    deleteButton.addEventListener("click", function () {
      deleteData(el, i);
    });

    let rejectButton = document.createElement("td");
    rejectButton.textContent = "Reject";
    rejectButton.style.background = "red";
    rejectButton.style.fontWeight = "bold";



    let confirmButton = document.createElement("td");
    confirmButton.textContent = "Confirm";
    confirmButton.style.background = "green";
    confirmButton.style.fontWeight = "bold";
    confirmButton.addEventListener("click", () => { handleBook(el,i) })


    tr.append(
      td1,
      td2,
      td3,
      td4,
      td5,
      td6,
      otp,
      deleteButton,
      rejectButton,
      confirmButton
    );
    tbody.append(tr);
  });


  function deleteData(el, i) {
    registerddata.splice(i, 1);
    localStorage.setItem("data", JSON.stringify(registerddata));
    displayData(registerddata);
  }
  function handleBook(el, id) {
	bookedData.push(el);
	localStorage.setItem("booked", JSON.stringify(bookedData));
	alert(`${el.name} added to waiting list`)
	setTimeout(() => {
		alert(`Booking ticket from ${el.fromStation} to ${el.toStation}`)
	}, 5000)

	setTimeout(() => {
		alert(`Ticket booked for ${el.date}`)
		registerddata.splice(id, 1)
		localStorage.setItem("data", JSON.stringify(registerddata));
        displayData(registerddata)

	}, 10000)
}

}





// filtering code
document
    .getElementById("filterby_seat")
    .addEventListener("change", filterbyseat);
  function filterbyseat() {
    let seat_filter = document.getElementById("filterby_seat").value;
    let arr = registerddata.filter((el) => {
      return el.seat == seat_filter;
    });
    displayData(arr);
  }
// Filter by date
  document.getElementById("date").addEventListener("change", filterbydate);
  function filterbydate() {
    let order = document.getElementById("date").value;

    if (order == "inc") {
      users.sort((a, b) => {

        if (+a.date.split("-").reverse().join("") > +b.date.split("-").reverse().join("")) {
          return 1;
        }
        if (+a.date.split("-").reverse().join("") < +b.date.split("-").reverse().join("")) {
          return -1;
        }
        return 0;
      });
    } else {
      registerddata.sort((a, b) => {
        if (+a.date.split("-").reverse().join("") < +b.date.split("-").reverse().join("")) {
          return 1;
        }
        if (+a.date.split("-").reverse().join("") > +b.date.split("-").reverse().join("")) {
          return -1;
        }
        return 0;
      });
    }
    localStorage.setItem("data", JSON.stringify(registerddata));
    displayData(registerddata);
  }

  document.getElementById("age").addEventListener("change", sortByAge);
  function sortByAge() {
    let age = document.getElementById("age").value;
    if (age == "inc") {
      registerddata.sort((a, b) => {
        if (+a.age > +b.age) {
          return 1;
        }
        if (+a.age < +b.age) {
          return -1;
        }
        return 0;
      });
    } else {
      registerddata.sort((a, b) => {
        if (+a.age < +b.age) {
          return 1;
        }
        if (+a.age > +b.age) {
          return -1;
        }
        return 0;
      });
    }
    localStorage.setItem("data", JSON.stringify(registerddata));
    displayData(registerddata);
  }


