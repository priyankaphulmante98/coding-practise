let form = document.querySelector('form')
form.addEventListener('submit',handleAdd);


let registerData=JSON.parse(localStorage.getItem("data"))||[]
function handleAdd(e){
e.preventDefault()
  let userDetail ={
    id:form.uniqueid.value,
    name:form.name.value,
    age:form.age.value,
    fromStation:form.fromstation.value,
    toStation:form.tostation.value,
    date:form.date.value,
    seat:form.seat.value,
    otp: Math.floor(1000 + Math.random() * 9000)
  }

const {id,name,age,fromStation,toStation,date,seat,otp} = userDetail

let isPresent = registerData.filter(el => {
  return el.id === id
})
if(isPresent.length !==0 ){
  alert("Please Enter Unique Id")
}else if(name.length < 4){
alert("Name Character should be greater then 4")
}
else if(age<18 || age>=40){
  alert("Age should be  18 to 40")
}
 else if(fromStation===toStation){
  alert("station should not be same")
}
else{
  registerData.push(userDetail)
  alert("Register Successfully")
  localStorage.setItem('data',JSON.stringify(registerData))
}

}