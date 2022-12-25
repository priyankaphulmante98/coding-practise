let form = document.querySelector("form");
form.addEventListener("submit", myfunc);


let users = JSON.parse(localStorage.getItem('user')) || []

async function myfunc(e) {
  e.preventDefault();
  let user = {
    email: form.email.value,
    password: form.password.value
  };
console.log(user)

let p = users.find((el,i)=>{
    return el.email==user.email && el.password == user.password
})
if(p){
alert('Login Successfully')
    window.location.href='../page/book.html'
}else{
    alert('Wrong credential') 
}
    
}
