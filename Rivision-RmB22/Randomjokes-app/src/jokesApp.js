function setJokes(data) {
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div
  
  let container = document.getElementById("joke-container");

  container.innerHTML=null;
  let div = document.createElement("div");
  div.setAttribute("class", "joke-text")

  let para = document.createElement("p");
  para.setAttribute("class", "joke-text")

  para.textContent=data.value;

  div.append(para)
  container.append(div)
  
  
}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure

  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    // console.log(data);
    setJokes(data)
    return data

    
  } catch (error) {
    console.log(error)
    return 'something went wrong'
  }
};

let getJokeByCategory = async (event) => {
  // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
  try {
    // let category_nam= document.getElementById("get-category")
   let  category_name = event.target.value;
    let res = await  fetch(`https://api.chucknorris.io/jokes/random?category=${category_name}`)
    let data = await res.json();
    console.log(data, "jokeData")
    setJokes(data);
    return data;
    
  } catch (error) {
    console.log("something went wrong")
    
  }



};
window.onload = function () {
  // add click event to button
  // add change event to select tag

  let btn = document.getElementById("get-jokes-data");
  btn.onclick=getRandomJoke;

  let select = document.getElementById("get-category");
  select.onchange=getJokeByCategory;

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
