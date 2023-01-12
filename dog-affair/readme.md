## Instructions

- You should use json-server for this.
- Use HTML, CSS and JS DOM to solve this question.
- Read entire question carefully for at-least 15 mins, understand it and code it.
- Use HTML, CSS and JS DOM to solve this question.
- You will have to also deploy both JSON server and app.
- Commit your code every hour with proper commit message to your repository (we will monitor every commit)

## Problem Statement:

- You are planning a Dog event where you need info of all dogs coming to event so that you can make required preparations.
- The task is to build two sections.
    - Admin section
    - User section
- In home screen make two buttons for these two sections, on clicking on buttons move to that particular section.
- Details of each section is given below

## User section:

- It will have a registration form with following fields
    1. Name of breed
    2. Age of pet
    3. Gender
    4. Place 
- On form submit, post data to JSON server.
- Use JSON server to manage the data (using local storage or dummy object data will lead to disqualification)
- After submitting form, show an alert or popup saying that “successfully registered”, also you need to post this information in JSON server for admin to access it.
- Your db.json should look something like this

```jsx
{
  "dogs": [
    {
      "id": 1,
      "name": "Cherry",
      "age": 2,
      "place": "Visakhapatnam",
      "gender": "Male"
    },
    {
      "id": 1,
      "name": "Tommy",
      "age": 3,
      "place": "Banglore",
      "gender": "Female"
    }
  ]
}
```

## Admin Section:

- This section will have Navbar with three different pages
    - Login Page `(login.html)`
    - Data Page `(data.html)`
    - Reports page `(reports.html)`
- Data and Reports page  should be private routes (these pages should be accessible only if admin is logged in)

### Login page (login.html)

- Use reqres API to login as admin ([https://reqres.in/](https://reqres.in/)) -  LOGIN - SUCCESSFUL (refer to documentation)
- After successful login, move admin to data page.
- Show loaders and error messages.

### Data page (data.html)

- In this page all the data which was being filled in dog section should be displayed in form of cards (4 cards per row)
- Use dummy images for all users.
- This page should also have `sort, filter and search` functionality (write custom logic for this)
    - Sort by Age
    - Filter by Gender
    - Search by name (onChange event)
- Each card should  also have `delete` icons.
- Admin should be able to `delete` any user who has registered (his entry in json server should also get deleted)
- Each card should  also have `edit` icon.
- When Admin clicks on `edit`, Admin should be able to edit/change age of particular dog in JSON data (you can use modal for this) and display updated data.

## Reports page

- Display overall report of event in form of table.
- Report should include
    - Total number of dogs attending.
    - Number of female dogs attending.
    - Number of Male dogs attending.
    - Average age group of dogs attending.

## Note:

- Maintain flow of app as mentioned.
- Error messages should be shown
- Use loaders.
- Good designs will fetch bonus marks.
- Submitting local host links for mock server will lead to disqualification.

### Submission

- Please submit deployed link and Github link of code.
- ***Deploy JSON server too. (submitting [localhost](http://localhost) link will lead to disqualification)
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it)
- **Push your code into `masai-repo`, don’t submit personal repo links (submitting personal repo links will lead to disqualification)**
- Any issues in deployed link will be considered null and void.
- Please verify your submissions.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### Rubrics / Criteria to be judged upon

- CRUD Operations***
- JSON server***
- JSON server deployment.
- Fetch
- Promises
- Sorting and Filtering.
- Private routes
- Good UI
- Code cleanliness and folder structure will be looked into.
- Usage of Javascript (using react will lead to disqualification)