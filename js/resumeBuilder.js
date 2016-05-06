/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
  "name": "Vinodh",
  "role": "Java Developer",
  "contacts": {
	"mobile": "682-401-8808",
	"email": "vinodh.thiagarajan@gmail.com",
	"github": "https://github.com/VinodhThiagarajan86",
	"location": "Austin,Texas"
  },
  "welcomeMessage": "What's happening here ?!",
  "skills": [
	"Java",
	"Javascript",
	"Jquery",
	"Spring",
	"Groovy",
	"Grails"
  ],
  //"biopic": "http://s20.postimg.org/vlovawkct/16843687.jpg"
  "biopic": "images/fry.jpg"
};

/*Display Name*/

$('#header').append(HTMLheaderName.replace('%data%',bio.name));
$('#header').append(HTMLheaderRole.replace('%data%',bio.role));

/*Contacts*/

var topContactId = $('#topContacts');
$('#header').append(HTMLbioPic.replace('%data%',bio.biopic));
$('#header').append(HTMLmobile.replace('%data%',bio.contacts.mobile));
$('#header').append(HTMLemail.replace('%data%',bio.contacts.email));
topContactId.append(HTMLgithub.replace('%data%',bio.contacts.github));
topContactId.append(HTMLlocation.replace('%data%',bio.contacts.location));
/*Work Experience*/
var work = {
  "email": [
	"Java Developer",
	"Technology Analyst",
	"Senior Software Engineer",
	"Software Engineer",
	"Software Trainee"
  ],
  "employer": "hackcorp llc",
  "title": "Java Developer",
  "location":"Austin,Texas",
  "dates": "in progress",
  "descrition": "Developing Insurance Application",
  "display": "function(){}"
}

var workExperience = $('#workExperience');