let sort_filter = document.getElementById("sort_filter");
let sort_lth = document.getElementById("sort_lth");
let sort_htl = document.getElementById("sort_htl");

let mobilesData = JSON.parse(localStorage.getItem("mobile_data")) || [];
console.log(mobilesData)
const getData = (mobilesData) => {
  //    console.log(mobilesData)
  let mobile_list = document.getElementById("mobile_list");
  mobile_list.innerHTML = null;

  mobilesData.forEach(function (element, i) {
    let container = document.createElement("div");
    container.setAttribute("class","mobile");

    let image = document.createElement("img");
    image.src = element.image;

    let brand = document.createElement("h3");
    brand.textContent = element.brand;

    let name = document.createElement("h3");
    name.textContent = element.name;

    let price = document.createElement("p");
    price.textContent = element.price;

    let button = document.createElement("button");
    button.setAttribute("class", "remove");
    button.innerText = "Remove";
    button.addEventListener("click", function () {
      function remove(i){
        mobilesData.splice(i, 1);
        localStorage.setItem("mobile_data", JSON.stringify(mobilesData));
        // window.location.reload();
        getData(mobilesData)
      };
      remove(i)
    });

    container.append(image, brand, name, price, button);
    mobile_list.append(container);
  });

  // function remove(i) {
   
  // }
};
getData(mobilesData);

// filter by low to high
sort_lth.onclick=filterlth
function filterlth() {
  // console.log('sort_lth')
  mobilesData.sort((a, b) =>  a.price - b.price);
  getData(mobilesData)
}

// filter by high to low
sort_htl.onclick=filterhtl
function filterhtl() {
  // console.log('sort_lth')
  mobilesData.sort((b, a) =>a.price -b.price)
  getData(mobilesData)
}

