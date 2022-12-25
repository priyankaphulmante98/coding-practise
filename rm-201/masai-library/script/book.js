
// Get Request Data
let container = document.getElementById("data-div");
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

// Append function
function appendData(data) {
  // console.log(data)

  data.forEach((el, i) => {
    let big_box = document.createElement("div");
    big_box.setAttribute("class", "big_box");


    let box1 = document.createElement("div")
    box1.setAttribute("class", "box1");

    let box2 = document.createElement("div")
    box2.setAttribute("class", "box2");


    let img = document.createElement('img')
    img.src = el.image_url;

    let book_name = document.createElement("p");
    book_name.textContent = el.book_name;

    let author = document.createElement("p");
    author.textContent = el.author;

    let genre = document.createElement("p");
    genre.textContent = el.genre;

    let edition = document.createElement("p");
    edition.textContent = el.edition;

    let publisher = document.createElement("p");
    publisher.textContent = el.publisher;

    let cost = document.createElement("p");
    cost.textContent = el.cost;

    let borrowed = document.createElement("p");
    borrowed.textContent = el.borrowed;


    box1.append(img)
    box2.append(book_name, author, genre, edition, publisher, cost,borrowed)
    big_box.append(box1,box2);
    container.append(big_box);
  });
}


