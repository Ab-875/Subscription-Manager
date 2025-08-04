# Project 1: 'Wordle' 

![Image of the site interface](/public/images/sub-manager-interface.PNG)

### Introduction

In this Project I looked to tackle a problem that I frequently had, developed and fully construted a full MEN stack application that keeps track of my subscriptions and monthly bills on a monthly period by displaying them in a familiar and detailed cards view for ease of tracking and usage. 

### Technologies Used

- HTML5
- CSS3
- JavaScript
- MongoDB
- Express
- Node.js
- GitHub

### Get Started

- Instructions: Any new user will have have to sign-up to the website before interacting with any sort of feature in the website, after singing up a user can be guided by the navigation bar at the top to perform their desired need from the application. The user can add new subscriptions that can be viewed in either the all subscriptions page or the selected categories. When interacting with the card a user can edit the original content of the subscription or completely delete a subscription.

- [access the website here:](https://subscription-manager-1m0z.onrender.com/)

### Development

The development of this project was a new experience, I became familiar with the process and structuring of full stack applications. Dealing with frameworks for the first time was an interesting experience, it allowed me to understand more of how modern applications are developed and maintained and what thoughts are given into their creation. Once I understood and planned how to operate my routes and what pages I want to display it was an easy proccess to figure out what I wanted the final application to look like and what I wanted to achieve.

During my development I dealt with a lot of date storing, displaying and manipulating. As such I did not want a user to put dates into the forms that don't make sense or could cause problems in storing or displaying. as such one of the cases I had were that the user could input a starting date for his subscription and later on input a next bill date that is before the starting date. To deal with this problem I decided to add a simple script that captures both inputs, which ever comes first and sets it as a limit to the other input field. As showen in the code below:


``` 
    <script>
        const chosenStartDate = document.getElementById("start-date")
        const chosenEndDate = document.getElementById("end-date")
        chosenStartDate.addEventListener("change", () => {
            chosenEndDate.min = chosenStartDate.value
        })
        chosenEndDate.addEventListener("change", () => {
            chosenStartDate.max = chosenEndDate.value
        })
    </script>
```

Here is an example of what it would like visually 

![locked dates example](/public/images/script-example.PNG)

and as such the rest of the project was handling similar things. 

### Attributions

- Bootstrap CSS 
    - [CSS Modal](https://getbootstrap.com/docs/4.0/components/modal/) 

- Bootstrap JavaScript
    - [JS Bootstrap](https://getbootstrap.com/docs/3.4/javascript/)

### Next Step

- Add more sorting features
- More detail fields
- Work on a notification system

### Conclusion

After finishing this project I had a chance to reflect on what I learned and applied as well as achieving my initial goal of better understanding how frameworks operate and I got a better idea or a closer look at what full stack applications should look like and how they operate. I look forward to work on more similar or bigger projects in the future.