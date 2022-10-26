# mockpractise
# Masai Vaccination
<h4>https://mockpractise-f3bo7q4rp-priyankaphulmante98.vercel.app/</h4>

# `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don't jump directly into code.
- Commit your code every hour with a proper commit message to your repository (we will monitor every commit)
- Use HTML, CSS, and Vanilla JavaScript to solve this question.
- Invest ample time in providing good styles, and don’t use any external libraries.

`**Problem Statement**:`

The task is to implement a small web app that keeps track of the vaccination status of Masai employees and students.

`**Features:**`

- Your app should contain a navbar with the following pages
    - Registration Page (register.html)
    - Dashboard Page (dashboard.html)
    - Vaccinated Page (vaccinated.html)
    

---

## `**Register.html**`

- The registration page should contain a form with the following fields :
    - **Unique ID**: Should be unique, duplicate ID should not be allowed.
    - **Name:** Should be at least 4 characters.
    - **Age**: Should be between 18 to 40. No other values should be accepted.
    - **Designation** :  (Employee / Student) - You can use radio buttons for this.
    - **Priority** :  (p0, p1, p2, p3) - where “p0” has the highest priority and “p3” has the least.
    - **Vaccine**:  (Covishield / Covaxin /Sputnik) - Use select tag for this.
    - **Register Button**

- On clicking “Register” the **form should be validated** and if the user has entered any value that does not match the constraints given, appropriate alerts should be given.
- After successful validation, the registration data should be stored in **LocalStorage**.

---

## `**Dashboard.html**`

- All the users who have registered for vaccination should be displayed in the form of a table with all the fields entered during the registration as columns.
- Along with these fields, a new field called “**OTP**” should be appended to each user, with a **4-digit number**, which should be randomly generated.  **Hint. Math.random()**
- Each row should also contain “**Delete**” and “**Vaccinate**” buttons colored “Red ” and “Green ” respectively.
- Clicking on **Delete,** that particular row should be deleted from the Frontend as well as from the **localStorage**.
- Clicking on **Vaccinate** button, the user should be prompted by an OTP component where the user has to enter the correct OTP generated during the registration. (Note : OTP will be unique for each user)

![                                                             OTP Component Reference Image](https://media.giphy.com/media/9JiszPVOX5FuPfJm39/giphy.gif)

                                                             OTP Component Reference Image

- After entering the correct **OTP**, the user should be prompted with the following alerts periodically based on the time
    - **Alert** “<Name> Added to Queue” - immediately after entering the correct OTP.
    - **Alert** “Vaccinating <Vaccine_Name> - after 5 seconds.
    - **Alert** “<Name> Vaccinated - after 10 seconds.
    - Use **setTimeout** and promises to implement this.
    
    ```
    Example Alerts
    
    John Added to Queue - Immediately
    
    Vaccinating Covishield - After 5 seconds
    
    John Vaccinated - After 10 seconds
    ```
    
- After the alerts, the row should be deleted from the dashboard, and should be stored in localStorage under the key “**vaccinated**”.
- The dashboard page should also have the following functionalities
    - **Filter** by Vaccine.
    - **Sort** by age.
    - **Filter** by Priority.
- All these **functionalities should work together seamlessly**.

---

## `**Vaccinated.html**`

- The vaccinated page should contain all the users, who have successfully vaccinated obtained from the **LocalStorage**.
- All the functionalities on the Dashboard page such as
    - **Filter** by Vaccine.
    - **Sort** by age.
    - **Filter** by Priority.

Should be working on this page as well. 

---

## Note:

- Maintain the flow of the app as mentioned.
- Error messages should be shown.
- All forms should be validated.
- Good designs will fetch bonus marks.

## Submission

- Please submit deployed link and Github link of code.
- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Please double-check if deployed version works or not (run the deployed version on your laptop and then submit it).
- Any issues in the deployed link will be considered null and void.
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before the deadline.

### Rubrics / Criteria to be judged upon

- HTML, CSS, Vanilla JavaScript.
- Filtering, sorting, and Local Storage.
- Promises and Set Timeout.
- DOM Manipulation.
- Good Layout and Design.
- Code cleanliness.
- Component structure.

## Rubrics - [Link](https://www.notion.so/Masai-Vaccination-Rubrics-66cf977d08be4bd89dea767e44b587e8)
