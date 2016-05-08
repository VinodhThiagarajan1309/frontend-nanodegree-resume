/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $( "img" ).addClass( "img img-responsive" );

 var bio = {
  "name": "Vinodh",
  "role": "Web Developer",
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
	"Groovy",
	"Grails"
  ],
  //"biopic": "http://s20.postimg.org/vlovawkct/16843687.jpg"
  "biopic": "images/fry.jpg"
};

/*Display Name*/

var headerId = $('#header');
var topContactId = $('#topContacts');

//headerId.prepend(HTMLheaderRole.replace('%data%',bio.role));
//headerId.prepend(HTMLheaderName.replace('%data%',bio.name));

$('.navbar-brand').prepend(HTMLheaderRole.replace('%data%',bio.role));
$('.navbar-brand').prepend(HTMLheaderName.replace('%data%',bio.name));




/*Work Json*/
var work = {
  "jobs": [{
    "employer": "Company 2",
    "title": "Java Developer",
    "location": "Austin,Texas",
    "dates": "in progress",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }, {
    "employer": "Company 1",
    "title": "Java Developer",
    "location": "Fortworth,Texas",
    "dates": "in progress",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }, {
    "employer": "Company 1",
    "title": "Java Developer",
    "location": "Austin,Texas",
    "dates": "Chennai,Tamilnadu",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }, {
    "employer": "Company 1",
    "title": "Java Developer",
    "location": "Chennai,Tamilnadu",
    "dates": "in progress",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }, {
    "employer": "Company 1",
    "title": "Java Developer",
    "location": "Mysore,India",
    "dates": "in progress",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }],
  "display": "function(){}"
}

//Get the workExperience id
var workExperience = $('#workExperience');

//Iterate the jobs json
for(i in work.jobs){
workExperience.append(HTMLworkStart);
workExperience.append(HTMLworkEmployer.replace('%data%',work.jobs[i].employer)+HTMLworkTitle.replace('%data%',work.jobs[0].title));
workExperience.append(HTMLworkDates.replace('%data%',work.jobs[i].dates));
workExperience.append(HTMLworkLocation.replace('%data%',work.jobs[i].location));
workExperience.append(HTMLworkDescription.replace('%data%',work.jobs[i].description));
}



/*Projects Json*/
var projects = {
  "projects": [
    {
      "title": "Java Developer",
      "dates": "22-06-2015 till now",
      "description": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will",
      "images": "http://s20.postimg.org/to38h51xp/world.jpg"
    },
    {
      "title": "Java Developer",
      "dates": "08-09-2008 to 22-06-2015",
      "description": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will",
      "images": "http://s20.postimg.org/tzp5916a5/macbook.jpg"
    }
  ],
  "display": "function(){}"
}

//Grab the projects div
var projectsId = $("#projects");


//Iterate the projects json
for(i in projects.projects){
projectsId.append(HTMLprojectStart);
projectsId.append(HTMLprojectTitle.replace('%data%',projects.projects[i].title));
projectsId.append(HTMLprojectDates.replace('%data%',projects.projects[i].dates));
projectsId.append(HTMLprojectDescription.replace('%data%',projects.projects[i].description));
projectsId.append(HTMLprojectImage.replace('%data%',projects.projects[i].images));
}

/*Education Json*/
var education = {
  "schools": [
    {
      "name": "Thiagarajar College of Engineering",
      "location": "Madurai,India",
      "degree": "Bachelors in Mechatronics",
      "dates": "08-08-2004 to 08-04-2008"
    },
    {
      "name": "TVSLMHSS",
      "location": "Madurai,India",
      "degree": "Higher Secondary",
      "dates": "06-06-1990 to 06-06-2004"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "20-08-2015",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "dates": "17-09-2015",
      "url": "http://www.udacity.com"
    }
  ]
}

//Grab the education Header

var educationId = $('#education');


//var HTMLonlineClasses = '<h3>Online Classes</h3>';
//var HTMLonlineTitle = '<a href="#">%data%';
//var HTMLonlineSchool = ' - %data%</a>';
//var HTMLonlineDates = '<div class="date-text">%data%</div>';
//var HTMLonlineURL = '<br><a href="#">%data%</a>';


//Iterate the education schools json
for(i in education.schools){

educationId.append(HTMLschoolStart);
educationId.append(HTMLschoolName.replace('%data%',education.schools[i].name));
educationId.append(HTMLschoolDegree.replace('%data%',education.schools[i].degree));
educationId.append(HTMLschoolDates.replace('%data%',education.schools[i].dates));
educationId.append(HTMLschoolLocation.replace('%data%',education.schools[i].location));

}
educationId.append(HTMLonlineClasses);
for(i in education.onlineCourses){
educationId.append(HTMLschoolStart);
educationId.append(HTMLonlineTitle.replace('%data%',education.onlineCourses[i].title)+HTMLonlineSchool.replace('%data%',education.onlineCourses[i].school));
educationId.append(HTMLonlineDates.replace('%data%',education.onlineCourses[i].dates));
educationId.append(HTMLonlineURL.replace('%data%',education.onlineCourses[i].url));
 
}








$('#mapDiv').append(googleMap);










