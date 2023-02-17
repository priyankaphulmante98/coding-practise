let form = document.getElementById("form");
form.addEventListener("submit", myfunc);
let label = document.getElementById("lemail");
let spass = document.getElementById("passmsg");
let validData = JSON.parse(localStorage.getItem("data")) || [];
function myfunc(e) {
  e.preventDefault();

  let obj = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
  };
  const { name, email, password } = obj;

  function myFun() {
    var one = document.myForm.email.value.trim();

    let [e, p] = [false, false];
    checkemail(one);
    checkpass(password);

    function checkemail(email) {
      let char =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789@.";

      let dom1 = email.split(".");
      let dom = dom1[dom1.length - 1];
      let at = email.indexOf("@");
      let validdom = false;
      let alchar = true;
      let dbldot = false;
      let domains = ["com", "in", "gov", "org", "edu", "net"];
      for (let i = 0; i < domains.length; i++) {
        if (dom == domains[i]) {
          validdom = true;
        }
      }

      for (let i = 0; i < email.length; i++) {
        if (!char.includes(email[i])) {
          alchar = false;
        }
        if (email[i] == "." && email[i + 1] == ".") dbldot = true;
      }
      // console.log(alchar,"alchar")
      label.style.color = "red";
      if (email[0] == "." || email[0] == "@") {
        console.log("invalidstart");
        label.innerText = "**invalidstart";
      } else if (!email.includes("@")) {
        console.log("@ not present");
        label.innerText = "**invalidstart";
      } else if (email[at + 1] == ".")
        label.innerText = "domain cant start with .";
      else if (validdom == false) label.innerText = `invalid tld domain ${dom}`;
      else if (alchar == false)
        label.innerText = "Only allows character, digit, underscore, and dash ";
      else if (dbldot) label.innerText = "double dots";
      else {
        label.innerText = "email is authorized";
        label.style.color = "green";
        e = true;
      }
    }

    function checkpass(pass) {
      let up = false;
      let nm = false;
      let upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let numeric = "0123456789";
      let char =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
      let notvalidchar = false;

      for (let i = 0; i < pass.length; i++) {
        if (upperc.includes(pass[i])) up = true;
        if (numeric.includes(pass[i])) nm = true;
        if (!char.includes(pass[i])) notvalidchar = true;
      }

      if (pass.length < 6) {
        spass.innerText = "password atleast contain 6 letters";
        spass.style.color = "red";
      } else if (!up) {
        spass.innerText = "must Contain atleast one Uppercase";
        spass.style.color = "red";
      } else if (!nm) {
        spass.innerText = "must Contain atleast one Numeric value";
        spass.style.color = "red";
      } else if (notvalidchar) {
        spass.innerText = "must only Contain alphanumericvalue ";
        spass.style.color = "red";
      } else {
        spass.innerText = "password authorized";
        spass.style.color = "green";
        p = true;
      }
    }
    if (e && p) {
      alert("validated successfully");
    }
  }
  myFun();
}

// done

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
