/*
This is empty on purpose! Your code to build the resume will go here.
 */



var formattedName = HTMLheaderName.replace("%data%", "Anisha Jain");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);


var bio = {
    "name": "Anisha Jain",
    "role": "Front-End Developer",
    "contacts": {
        "email": "anishajain@outlook.com",
        "linkedIn": "   |    https://www.linkedin.com/in/annysha   |",
        "mobile":"   |   (510) 999-7688   |",
        "location": "   |   Bay Area   |",
        "github": "   |   https://github.com/Anisha7   |"
    },
    "biopic": "http://placehold.it/300x200",
    "welcomeMessage": "Hello!",
    "skills": ["HTML", "CSS", "JavaScript", "UI/UX Design"],
};

bio.skills.forEach(function(skill) {
if (bio.skills.length>0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
} 
});

bio.display = function() {
$("#header").append(bio.name);
$("#header").append(bio.pic);
$("#main").append(bio.role);
$("#topContacts").append(bio.contacts.email);
$("#topContacts").append(bio.contacts.linkedIn);
};

bio.display();

var work = {
    jobs:[
        {
            "title":"Front End Engineer and UI/UX Designer",
            "employer": "Nourish",
            "dates": "Jan 2017 - Present",
            "location": "SF Bay Area",
            "description": "I volunteered to help a group of Stanford Grads with a website (Nourish) that helps cancer patients find healthy food recipes and connect with doctors. I am their front-end engineer and designer. I'm working with a fellow teammate to program the website using Node Js, Html, Css, and such. I'm also creating the User Interface and User Experience design for the website using Adobe Experience Design.",
        },{
            "title":"Web Developer",
            "employer":"Marine Space Station Project",
            "dates":"Jan 2017- June 2017",
            "location": "SF Bay Area",
            "description": "I programmed and designed the website for our Multi-variable Calculus project. We modeled levels of water contamination and created a model to predict future levels of contamination. I created the map and program to output whether or not the water is safe for human contact at any beach that one may want to visit. This allows the user to choose a beach and get the results.",
        },{
            "title": "Organizer of the Santa Cruz Teen Entrepreneur Challenge",
            "employer": "Santa Cruz TECH",
            "dates": "Dec 2016 - Feb 2017",
            "location": "SF Bay Area",
            "description": "I am part of the SCTECH team, who put together a hackathon for junior and high school students in hopes of bringing such opportunities to the Santa Cruz student body. This event took place at the Museum of Art and History on Feb 25. I designed logos, brochures, creative name tags, certificates, art work, and a lot more. I also reached out to sponsors and speakers, worked on emails, and helped with advertising. I also assisted the design workshops, and mentored students who needed help with design tools such as Adobe Softwares and Invision. It was an amazing experience for me and my peers. We witnessed world-changing projects come to life, and promoted students to continue to develop and publish these projects.",
        }, {
            "title": "Choreographer and Performer",
            "employer": "Pacific Collegiate School Dance Company",
            "dates": "June 2015 - Feb 2017",
            "location": "SF Bay Area",
            "description": "I choreographed and participated in various dances for the PCS Dance Company performances. I worked with Hip-hop, Contemporary, and Bollywood. I taught my choreography to a group of students, preparing them for the performance.",
        }, {
            "title":"Android Developer and UI/UX Designer",
            "employer": "Microsoft'We Hack Too!'",
            "dates": "June 2016",
            "location": "SF Bay Area",
            "description": "My team developed an app to teach young adults how to manage their budget. Key Technologies included Android, Artificial Intelligence, Computer Vision, OCR, Adobe Illustrator, Microsoft Powerpoint. Self-taught JAVA and Android Studio.",
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    });
}

work.display();

var education = {
    "schools": [
    {
       "name": "Academy of Art University",
       "location": "San Francisco",
       "degree": "Pre-Collegiate",
       "majors": "Not Applicable",
       "dates": "June 2016 - June 2017",
       "url": "https://www.academyart.edu/",
    }, {
        "name": "Pacific Collegiate School",
        "location": "Santa Cruz",
        "degree": "High School Diploma",
        "majors": "Not Applicanble",
        "dates" : "Aug 2015 - June 2017",
        "url" : "https://www.pacificcollegiate.com/",
    }],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "June 10, 2017 - July 17, 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        },
        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": "June 2016",
            "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893",
        }
    ],
   // add display: function taking no parameters
};

education.display = function () {
    education.schools.forEach(function(school){
        $("#education").append(HTMLskillsStart);

            var formattedName = HTMLeducationName.replace("%data%", education.schools[school].name);
             $(".project-entry:last").append(formattedName);

            var formattedLocation = HTMLeducationLocation.replace("%data%", education.schools[school].location);
            $(".project-entry:last").append(formattedLocation);

            var formattedDegree = HTMLeducationDegree.replace("%data%", education.schools[school].degree);
            $(".project-entry:last").append(formattedDegree);

            var formattedMajors = HTMLeducationMajors.replace("%data%", education.schools[school].majors);
            $(".project-entry:last").append(formattedMajors);

            var formattedDates = HTMLeducationDates.replace("%data%", education.schools[school].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedUrl = HTMLeducationUrl.replace("%data%", education.schools[school].url);
            $(".project-entry:last").append(formattedUrl);
    }),
    education.onlineCourses.forEach(function(school){
        $("#education").append(HTMLskillsStart);
            var formattedTitle = HTMLeducationTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedSchool = HTMLeducationSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
            $(".project-entry:last").append(formattedSchool);

            var formattedDates = HTMLeducationDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedUrl = HTMLeducationUrl.replace("%data%", education.onlineCourses[onlineCourse].url);
            $(".project-entry:last").append(formattedUrl);
            
    });

}

// New Var for testing
var projects = {
    "projects": [
        {
            "title":"Nourish Website",
            "dates":"Jan 2017 - Present",
            "description":"I volunteered to help a group of Stanford Grads with a website (Nourish) that helps cancer patients find healthy food recipes and connect with doctors. I am their front-end engineer and designer. I'm working with a fellow teammate to program the website using Node Js, Html, Css, and such. I'm also creating the User Interface and User Experience design for the website using Adobe Experience Design. For more info, check http://anishajain.weebly.com/nourish.html .",
            "images": ["Project Image","Project Image"],
        }, {
            "title":"DOUGHNUT: Microsoft Winner",
            "dates":"June 2016",
            "description":"My team developed Dough Nut--an app built using Android Studio and Java--will provide young adults the incentive to spend less money, thus save more. With rewards, avatars, and amazing new accessories, young adults would be drawn to this app, as they are to apps such as Plant Nanny. I integrated Artificial Intelligence and Computer Vision Algorithms in this app for text-recognition features, and I created the pitch deck, logos, and art-work.",
            "images": ["Project Image","Project Image"],
        }
    ]
};
// Testing ends

var displayProjects = {
    "projects": [
        {
            "title":"Project 1",
            "dates":"Project Dates",
            "description":"Project Description",
            "images": ["Project Image","Project Image"],
        }, {
            "title":"Project 2",
            "dates":"Project Dates",
            "description":"Project Description",
            "images": ["Project Image","Project Image"],
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) 
            projects.projects[project].images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();


function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name [0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " "+name[1];
}



/* banner */


/* work */
/*$("#main").append(work.position);
$("#main").append(work.company); */

/* education */
/*$("#main").append(education.school);

$("#main").append(internationalizeButton); */

$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});