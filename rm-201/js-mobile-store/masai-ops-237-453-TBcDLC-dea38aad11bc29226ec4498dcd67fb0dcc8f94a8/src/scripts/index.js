// console.log('dhsbc')

let form = document.getElementById("mobile_form");

form.addEventListener("submit", func);

let mobilesData = JSON.parse(localStorage.getItem("mobile_data")) || [];
function func(e) {
  e.preventDefault();
  let formobj = {
    name: form.mobile_name.value,
    brand: form.mobile_brand.value,
    price: form.mobile_price.value,
    image: form.mobile_image.value,
  };
  mobilesData.push(formobj);
  localStorage.setItem("mobile_data", JSON.stringify(mobilesData));
  form.mobile_name.value = null;
  form.mobile_brand.value = null;
  form.mobile_price.value = null;
  form.mobile_image.value = null;
  // form.reset()
}
