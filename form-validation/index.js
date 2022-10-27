
let form = document.getElementById('form')
form.addEventListener('submit',myfunc);

let validData=JSON.parse(localStorage.getItem("data"))||[]
function myfunc(e){
    e.preventDefault()
  
    let obj={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value,
      
    }
    const {name,email,password}=obj  


function myFun(){
    var one = document.myForm.email.value
  


    // No character before @ 

    if(one.indexOf('@')<=0){
        document.getElementById("msg").innerHTML="**Invalid @ position";
        msg.style.color="red";
        return false;
    }


    // .b is not a valid tld 

    if((one.charAt(one.length-4)!='.')  && (one.charAt(one.length-3)!='.')){
        document.getElementById("msg").innerHTML="**Invalid . position at 4 !";
       msg.style.color="red";
        return false;
    }

  // @ is not present



   // Domain can not start with dot . 
    

// //   Domain can not start with dot . 
// if(one.statrtsWith('.')){
//     document.getElementById("Message").innerHTML="Invalid .  position"
//     Message.style.color="red"
//     return false;
// }


// An email should not be start with . 


// Only allows character, digit, underscore, and dash 


// Double dots are not allowed



//password
// You should have following validation for password present
var pass = document.getElementById("password").value;
if(pass==""){
    document.getElementById("passmsg").innerHTML="** please fill password";
    passmsg.style.color="red";
        return false;
}

// Length of password should be greater than 6.
if(pass.length < 6 ){
    document.getElementById("passmsg").innerHTML="** password length must be < 6 char";
    passmsg.style.color="red";
        return false;
}

// At-least one uppercase alphabet password.
if(pass.toUppercase <=1 ){
    document.getElementById("passmsg").innerHTML="**  At-least one uppercase alphabet";
    passmsg.style.color="red";
        return false;
}

// //Only alphanumeric inputs are accepted in the password field.
// let alphaNum =/^[A-Z a-z 0-9]  /;
// if(pass.match(alphaNum)) 
// true;
// else{
//     document.getElementById("passmsg").innerHTML="** type only alphaNumeric"
//     passmsg.style.color="red";
//         return false;
// }




// At-least one numeric value must be used in the password.
let Num =/^[0-9]  /;
if(pass.length.Num <=1 ){
    document.getElementById("passmsg").innerHTML="**At-least one numeric value must be used in the password ";
    passmsg.style.color="red";
        return false;
}



// Throw warnings if any of the above validations failed.



if(email==email  && password==password ){
    alert("form submitted succesfully");
    validData.push(obj)
    localStorage.setItem('data',JSON.stringify(validData))

}

}
myFun();
}

















//email use regexp

// function myFun(mail){
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)) {
//     alert("correct email address")
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }


//  //password validation  regexp

//  function CheckPassword(inputtxt) 
// { 
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(inputtxt.value.match(passw)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
