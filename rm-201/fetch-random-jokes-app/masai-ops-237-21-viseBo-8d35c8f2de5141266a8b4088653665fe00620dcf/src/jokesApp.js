function setJokes(data) {
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div

      let div = document.createElement("div")
      div.setAttribute=("class",'joke-text')

      let p = document.createElement('p')
      // p.setAttribute=("class",'joke-text')
      p.textContent = data.value
      div.append(p)
      document.getElementById('joke-container').append(div)

}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
try{
  let res = await fetch(`https://api.chucknorris.io/jokes/random`)
  let data = await res.json()
  setJokes(data)
  return data
  // console.log(data)
}catch(err){
  console.log(err)
  return "something went wrong"
}



};
let getJokeByCategory = async (event) => {
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
  // console.log(event)
  let category_name = event.target.value
  // console.log(category_name)
  try{
    let res = await fetch(`https://api.chucknorris.io/jokes/random?category=${category_name}`)
    let data = await res.json()
    // console.log(data)
    setJokes(data)
    return data;

  }
  catch(err){
    console.log(err)
    return "something went wrong"
  }


};
window.onload = function () {
  // add click event to button
  // add change event to select tag
let button = document.getElementById('get-jokes-data')
button.onclick=getRandomJoke
let selectCategory = document.getElementById('get-category')
selectCategory.onchange=getJokeByCategory

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
