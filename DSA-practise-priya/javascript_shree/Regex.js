

const txt = 'This regular expression example was made in January 12,  2020.'

const pattern = /\d/g  
// d is a special character which means digits
const pattern2 = /\d+/g  
const matches = txt. match(pattern)
const matches2 = txt. match(pattern2)

// console.log(matches) 
// ["1", "2", "2", "0", "2", "0"], this is not what we want
// console.log(matches2) //[ '12', '2020' ]



// 
const pattern3 = /[a]./g  // this square bracket means a and . means any character except new line
const pattern4 = /[a].+/g 
const txt3 = 'Apple and banana are fruits'
const matches3 = txt3.match(pattern3) //[ 'ar', 'am', 'as', 'ad', 'an', 'ar' ]
const matches4 = txt3.match(pattern4) //[ 'and banana are fruits' ]
// console.log(matches4)
 



// Zero or one times(?)
// Zero or one times. The pattern may not occur or it may occur once.

const txt5 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern5 = /[Ee]-?mail/g  // ? means optional
matches5 = txt5.match(pattern5)

// console.log(matches5)  // ["e-mail", "email", "Email", "E-mail"]




const txt6 = 'This regular expression example was made in December 6,  2019. 454567'
// const pattern6 = /\b\w{4}\b/g  
// const pattern6 = /\b[a-zA-z0-9]{4}\b/g  
// const pattern6 = /\d{4}/g  
const pattern6 = /\d{1,4}/g   // 1 to 4
//  exactly four character words
const matches6 = txt6.match(pattern6)
console.log(matches6)  //['This', 'made', '2019']

