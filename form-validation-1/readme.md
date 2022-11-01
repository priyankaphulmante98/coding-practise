# Mock-3

## Instructions:

- Use only Javascript along with HTML & CSS to build this application.
- Follow all coding standards and Unix philosophy.
- You should not use any libraries.
- Make Good UI, use pure CSS, don’t use any external libraries (good UI will fetch you extra marks)
- After reading question entirely, go through video demo of app at the end of question.

## Problem Statement:

- Your task is to build a Form Validator which validates email and password entered by user.

!(https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af09e86f-a65f-4ed9-9501-cde21e0468e6/Screenshot_2022-10-14_at_4.04.16_PM.png)

- Create a form which takes following information from the user
    - Name
    - Email - Use input type as “text” and not “email” , write custom logic
    - Password
- On clicking on Validate user should be able validate email and password using below validations.
- You shouldn’t use regex to solve this, use conditional statements etc.

## Email Validation

- Here are some examples of  invalid emails along with warnings to be shown below input boxes.

| Email | Warning to be shown on UI |
| --- | --- |
| masai.school.com  | @ is not present |
| masai@.com  | Domain can not start with dot .  |
| @masai.school.net  | No character before @  |
| name@gmail.b  | .b is not a valid tld  |
| name@.org.org  | Domain can not start with dot .  |
| .name@masaischool.org  | An email should not be start with .  |
| masaischool()*@gmail.com  | Only allows character, digit, underscore, and dash  |
| name..1234@yahoo.com  | Double dots are not allowed |

## Password Validation:

- You should have following validation for password
    - Length of password should be greater than 6.
    - Only alphanumeric inputs are accepted in the password field.
    - At-least one uppercase alphabet password.
    - At-least one numeric value must be used in the password.
- Throw warnings if any of the above validations failed.
- Note that you have throw multiple warnings if both email and password are not validated (check demo video)

## Submission

- Please submit deployed link and Github link of code.
- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it).
- Any issues in deployed link, will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### Rubrics / Criteria to be judged upon

- HTML, CSS, JS DOM.
- Good UI.
- Folder structure.
- Code cleanliness.

## Video demo - [Link](https://drive.google.com/file/d/1w6BlYXTaisUf72t2tmVyoQOAzeGo83Nr/view?usp=sharing)

`Time limit : 2 hours`
