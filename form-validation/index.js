
function myFun(){
    var one = document.myForm.email.value;

    // No character before @ 

    if(one.indexOf('@')<=0){
        document.getElementById("Message").innerHTML="Invalid @ position"
        return false;
    }

    // .b is not a valid tld 

    if((one.charAt(one.length-4)!='.')  && (one.charAt(one.length-3)!='.')){
        document.getElementById("Message").innerHTML="Invalid .  position at 4"
        return false;
    }
   // @ is not present


   // Domain can not start with dot . 
    
//   Domain can not start with dot . 

// An email should not be start with . 

// Only allows character, digit, underscore, and dash 

// Double dots are not allowed

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
