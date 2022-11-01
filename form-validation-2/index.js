document.querySelector("form").addEventListener("submit", validateUser);
let reqd_email = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "_", "-",".","@"];
let reqd_pass = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let domains=["com","org","net"]
function validateUser(e) {
	e.preventDefault()
	console.log("hi")
	let email = document.getElementById("email").value
	let password = document.getElementById("password").value
	let email_error = document.getElementById("email_error")
	let pass_error = document.getElementById("p_error");

	// email validation
	let dot_split=email.split(".");
	let e_flag2=true;
	for(let i=0;i<domains.length;i++){
		if(domains.includes(dot_split[dot_split.length-1])){
			e_flag2=false;
			break
		}
	}
	let e_arr = email.split("");
	let e_flag1 = false;
	for (let i = 0; i < email.length; i++) {
		if (!reqd_email.includes(e_arr[i])) {
			e_flag1 = true;
			break
		}
	}

	if (!email.includes("@")) {
		email_error.textContent = "@ is missing";
		email_error.style.color = "red"
	}
	else if (email[0] == "@") {
		email_error.textContent = "email cant start with @";
		email_error.style.color = "red"
	}
	else if (email[0] == ".") {
		email_error.textContent = "email cant start with .";
		email_error.style.color = "red"
	}
	else if (email.includes("..")) {
		email_error.textContent = "email cant have double dot";
		email_error.style.color = "red"
	}
	else if (e_flag1) {
		email_error.textContent = "invalid characters";
		email_error.style.color = "red"
	}
	else if(email.includes("@.com") ||email.includes("@.org") || email.includes("@.net")){
		email_error.textContent = "domain can not start with dot .";
		email_error.style.color = "red"
	}
	else if(e_flag2){
		email_error.textContent = "not a valid tld";
		email_error.style.color = "red"
	}
	else {
		email_error.textContent = "success";
		email_error.style.color = "green"
	}


	//password validation

	let p_arr = password.split("");
	let flag1 = false;
	for (let i = 0; i < password.length; i++) {
		if (!reqd_pass.includes(p_arr[i].toLowerCase())) {
			flag1 = true;
			break
		}
	}
	let flag2 = false;
	for (let i = 0; i < password.length; i++) {
		if (Number(password[i])) {
			flag2 = true;
			break
		}
	}

	if (password.length <= 6) {
		pass_error.textContent = "password should be at least 6 characters";
		pass_error.style.color = "red"
	}
	else if (flag1) {
		pass_error.textContent = "only aplhanumeric charactors are valid";
		pass_error.style.color = "red"
	}
	else if (password.toLowerCase() == password) {
		pass_error.textContent = "password should have at least one uppercase letter";
		pass_error.style.color = "red"
	}
	else if (!flag2) {
		pass_error.textContent = "password should have at least one numeric letter";
		pass_error.style.color = "red"
	}
	else {
		pass_error.textContent = "success";
		pass_error.style.color = "green"

	}
}