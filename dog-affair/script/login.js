let form = document.querySelector('form')

// https://reqres.in/api/login

const userData = async(e) =>{
    e.preventDefault()
    let user = {
        email:form.email.value,
        password:form.password.value
    } 

    try{
        const res = await fetch('https://reqres.in/api/login',{
            method:"POST",
            body:JSON.stringify(user),
            headers:{"Content-Type":"application/json"}
        })
        let data = await res.json()
        console.log(data)
        window.location.href="./data.html"
    }
    catch(err){
        console.log(err)
    }
   
}