// console.log('summaiya')
let form = document.querySelector('form')



async function formAdd(event){
    event.preventDefault()
    let dogObj = {
        name:form.name.value,
        age:form.age.value,
        gender:form.gender.value,
        place:form.place.value
    }


    let  res =await fetch('http://localhost:8080/dogs',{
        method:"POST",
        body:JSON.stringify(dogObj),
        headers:{"Content-Type":"application/json"}
    })
    let data = await res.json()
    console.log(data)

}