// Post Request Data

let form = document.querySelector("form");
form.addEventListener("submit", myfunc);

async function myfunc(e) {
  e.preventDefault();
  let obj = {
    image_url: form.image.value,
    book_name: form.book.value,
    author: form.author.value,
    genre: form.genre.value,
    edition: form.edition.value,
    publisher: form.publisher.value,
    cost: form.cost.value,
    borrowed: false,
  };
  console.log(obj);
  try {
    let res = await fetch(`https://mock-api-oc4h.onrender.com/masailibrary`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    await alert("“Data Added Successfully”");
    await getData()
  } catch (err) {
    console.log(err);
  }
}

// Get Request Data
let tbody = document.querySelector("tbody");
let modal;
async function getData() {
  try {
    let res = await fetch(`https://mock-api-oc4h.onrender.com/masailibrary`);
    let data = await res.json();
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}
getData();

function appendData(data) {
  // console.log(data)
    tbody.innerHTML=''

  data.forEach((el, i) => {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "trbody");


    let td1 = document.createElement("td");

    let img = document.createElement('img')
    img.src = el.image_url;
    img.style.width='100%'
    img.style.height='120px'

    let td2 = document.createElement("td");
    td2.textContent = el.book_name;

    let td3 = document.createElement("td");
    td3.textContent = el.author;

    let td4 = document.createElement("td");
    td4.textContent = el.genre;

    let td5 = document.createElement("td");
    td5.textContent = el.edition;

    let td6 = document.createElement("td");
    td6.textContent = el.publisher;

    let td7 = document.createElement("td");
    td7.textContent = el.cost;

    let td8 = document.createElement("td");
    td8.textContent = el.borrowed;

    // Delete Button
    let trashbtn = document.createElement("td");
    trashbtn.textContent="DELETE"
    trashbtn.style.cursor="pointer"
    trashbtn.addEventListener("click", function () {
      dltdata(el);
    });

     //   Edit Button On click and open popup
     let editbtn = document.createElement("td");
     editbtn.setAttribute("class", "sourceText");
     editbtn.style.cursor="pointer"
     editbtn.textContent = "Update";
     editbtn.addEventListener("click", function () {
       editage(el);
     });
      modal = document.getElementById("myModal");
     var span = document.getElementsByClassName("close")[0];
     span.onclick = function () {
       modal.style.display = "none";
     };
     window.onclick = function (event) {
       if (event.target == modal) {
         modal.style.display = "none";
       }
     };



    td1.append(img)
    tr.append(td1,td2, td3, td4, td5, td6, td7,td8,trashbtn,editbtn)
    tbody.append(tr);
  });
}


async function dltdata(el) {
  let id = el.id;
  let res = await fetch(`https://mock-api-oc4h.onrender.com/masailibrary/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          let data = await res.json();
          await getData()
          console.log(data);
}


// Update Request
function editage(el) {
  modal.style.display = "block";
  let id = el.id;
  let form = document.getElementById('form2')
  form.addEventListener("submit", editFunc);
  async function editFunc(e) {
    e.preventDefault();
    let obj = {
      image_url: form.image.value,
      book_name: form.book.value,
      author: form.author.value,
      genre: form.genre.value,
      edition: form.edition.value,
      publisher: form.publisher.value,
      cost: form.cost.value,
      borrowed: false,
    };
    console.log(obj)
    try {
      let res = await fetch(`https://mock-api-oc4h.onrender.com/masailibrary/${id}`, {
        method: "PATCH",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      });
      let data = await res.json();
      getData()
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
}