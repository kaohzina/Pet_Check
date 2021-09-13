Use Node.js and Express.js to create a RESTful API.
Use Handlebars.js as the templating engine.
Use MySQL and the Sequelize ORM for the database.
Have both GET and POST routes for retrieving and adding new data.
Be deployed using Heroku (with data).
Use at least one new library, package, or technology that we haven’t discussed.
Have a polished UI.
Be responsive.
Be interactive (i.e., accept and respond to user input).
Have a folder structure that meets the MVC paradigm.
Include authentication (express-session and cookies).
Protect API keys and sensitive information with environment variables.
Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class/id naming conventions, indentation, quality comments, etc.).

The idea of the program is to sign up and log in to your accout to register your pet for an appointment. The appointment would then be displayed on the home screen for you to check out the determined appointments that you had set. Ideally the cookies session would prevent individuals from seeing your specific appointment details about your pet and would not be able to see what you are registering. 

The POST and GET routes are working with insomnia but for some reason the routes are not working with the frontend to backend functionality. That is because the button event listeners are not communicating properly. 

Aside from that there are additional examples that can be used for the insomnia portion down below to verify that the backend routes do in fact work. 

make a new user
{
  "username": "k",
	"email": "k@gmail.com",
	"password": "password1234"
}



{
	"firstname": "z",
	"lastname": "her",
	"email": "k@gmail.com",
	"phoneNumber": 123456789,
	"petsName": "scooter",
	"petType": "dog, cat, reptile.....",
	"gender": "gender"
}



{
	"fname":"Z",
	"lname":"Kaoher",
	"email":"z@gmail.com",
	"password":"password1234"
}

{
	"name":"scooter",
	"type":"cat",
	"breed":"tabby",
	"age":"3",
	"owner_id":1
}

CSS Library is bootstrap.