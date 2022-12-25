let form = document.querySelector("form");
form.addEventListener("submit", myfunc);

let users = JSON.parse(localStorage.getItem('user')) || []
async function myfunc(e) {
  e.preventDefault();
  let user = {
    name:form.name.value,
    email: form.email.value,
    password: form.password.value
  };
users.push(user)
  localStorage.setItem('user',JSON.stringify(users))
  window.location.href='../page/login.html'
}
