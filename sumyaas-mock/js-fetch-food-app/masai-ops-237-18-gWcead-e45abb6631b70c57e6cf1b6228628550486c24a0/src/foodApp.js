// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
const getCategoriesData = async () => {
  // code here
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    let data = await res.json();
    console.log("Categories Data :", data);
    return data
  } catch (err) {
    console.log(err)
  return "something went wrong";
  }
};

const getIngredientData = async () => {
  // code here
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
    );
    let data = await res.json();
    console.log("Ingredient Data :", data);
    return data
  } catch (err) {
    console.log(err)
    return "something went wrong";
  }
};

window.onload = function () {
  //  get the buttons here and add click event
  let btn1 = document.getElementById("get-category-data");
  let btn2 = document.getElementById("get-ingredient-data");
  btn1.onclick = getCategoriesData;
  btn2.onclick = getIngredientData;
};
// donot chnage the export statement
if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
