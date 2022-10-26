let form = document.getElementById('form')
form.addEventListener('submit',myfunc);

let registerData=JSON.parse(localStorage.getItem("data"))||[]
function myfunc(e){
    e.preventDefault()
    // console.log('gj')
   
    let obj={
        name:form.name.value,
        age:form.age.value,
        des:form.radio.value,
        priority:form.priority.value,
        vaccine:form.vaccine.value,
        uniqueId:Date.now()
    }
    const {name,age,des,priority,vaccine}=obj

if(age<18||age>=40){
    alert("age should be 18 to 40");
   

}   
else{

    
    registerData.push(obj)
    localStorage.setItem('data',JSON.stringify(registerData))

    window.location.href="../Dashboard/dashboard.html"


}
}



