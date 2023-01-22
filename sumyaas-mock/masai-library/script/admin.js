let form = document.querySelector('form')
form.addEventListener('submit',handleSubmit)



let user = JSON
function handleSubmit(e){
    e.preventDefault()
    let userObj={
        email:form.email.value,
        password:form.password.value
    }
    if(userObj.email=='admin@gmail.com' && userObj.password=='masai'){
        alert('Login successfully')
        window.location.href='./dashboard.html'
    }else{
        alert('Wrong Credential')
    }
}


