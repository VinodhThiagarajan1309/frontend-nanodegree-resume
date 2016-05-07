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

var headerId = $('#header');
var topContactId = $('#topContacts');

headerId.prepend(HTMLheaderRole.replace('%data%',bio.role));
headerId.prepend(HTMLheaderName.replace('%data%',bio.name));

/*Contacts*/
topContactId.append(HTMLcontactGeneric.replace('%data%',bio.contacts.mobile));
topContactId.append(HTMLmobile.replace('%data%',bio.contacts.mobile));
topContactId.append(HTMLemail.replace('%data%',bio.contacts.email));
topContactId.append(HTMLgithub.replace('%data%',bio.contacts.github));
topContactId.append(HTMLlocation.replace('%data%',bio.contacts.location));

/*Pic and Message*/
headerId.append(HTMLbioPic.replace('%data%',bio.biopic));
headerId.append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));
header

/*Skills and Skill List*/
var skillsId = $('#skills');
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

headerId.append(HTMLskillsStart);

for(i in bio.skills){
	skillsId.append(HTMLskills.bio.skills);
}


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