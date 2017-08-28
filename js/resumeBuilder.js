/*
This is empty on purpose! Your code to build the resume will go here.
 */





var bio = {
    "name": "Anisha Jain",
    "role": "Front-End Developer",
    "contacts": {
        "email": "anishajain@outlook.com",
        "linkedIn": "https://www.linkedin.com/in/annysha",
        "mobile": "(510) 999-7688",
        "location": "Bay Area",
        "githublink": "https://github.com/Anisha7",
        "github": "Anisha7",
    },
    "biopic": "http://placehold.it/300x200",
    "skills": ["HTML", "CSS", "JavaScript", "UI/UX Design"],
};

bio.display = function() {
    'use strict';
    // var formattedName = HTMLheaderName.replace("%data%", bio.name),
    //     formattedRole = HTMLheaderRole.replace("%data%", bio.role),
        var f_photo = HTMLbioPic.replace("%data%", bio.biopic),
        github = HTMLgithub.replace("%data%", "<a class=\"contacts-link\" href=\"" + bio.contacts.githublink + "\" target=\"_blank\">" + bio.contacts.github + "</a>"),
        f_email = HTMLemail.replace("%data%", "<a class=\"contacts-link\" href=\"mailto:" + bio.contacts.email + "\">" + bio.contacts.email + "</a>"),
        f_location = HTMLlocation.replace("%data%", bio.contacts.location),
        //f_linkedin = HTMLlinkedin.replace("%data%", "<a class=\"contacts-link\" href=\"" + bio.contacts.linkedin + "\" target=\"_blank\">" + bio.contacts.linkedin + "</a>"),
        formattedSkill,
        skill,
        HTMLContacts;

//display bio
// $("#header").append(formattedName);
// $("#header").append(formattedRole);

//contacts
$("#header").append(f_photo);
HTMLContacts = '<dl id="Contacts"></dl>';
$("#header").append(HTMLContacts);
$("#topContacts, #footerContacts").append(f_location);
$("#topContacts, #footerContacts").append(github);
//$("#topContacts").append(f_linkedin);
$("#topContacts, #footerContacts").append(f_email);

var formattedName = HTMLheaderName.replace("%data%", "Anisha Jain");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

if (bio.skills.length > 0) {
        $("#topContacts").append(HTMLskillsStart);
        for (skill in bio.skills) {
            if (bio.skills.hasOwnProperty(skill)) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};


bio.display();

// bio.skills.forEach(function(skill) {
// if (bio.skills.length>0) {
//     $("#header").append(HTMLskillsStart);
//     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//     $("#skills").append(formattedSkill);
//     formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//     $("#skills").append(formattedSkill);
// } 
// })

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

// work.display = function() {
//     work.jobs.forEach(function(job) {
//         $("#workExperience").append(HTMLworkStart);

//         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//         var formattedEmployerTitle = formattedEmployer + formattedTitle;

//         $(".work-entry:last").append(formattedEmployerTitle);

//         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//         $(".work-entry:last").append(formattedDates);

//         var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
//         $(".work-entry:last").append(formattedLocation);

//         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
//         $(".work-entry:last").append(formattedDescription);
//     });
// }

work.display = function () {
    'use strict';
    var i = 0, a;
    $("#workExperience").append("<div id=\"work-foldable-content\"></div>");
    for (i = 0; i < work.jobs.length; i++) {
        //console.log(work.jobs[i].employer);
        $("#work-foldable-content").append(HTMLworkStart);
        a = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(a);
        a = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(a);
        a = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        $(".work-entry:last").append(a);
        a = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(a);
        a = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(a);
    }
};

work.display();

var education = {
    "schools": [
    {
       "name": "Academy of Art University",
       "location": "San Francisco",
       "degree": "Pre-Collegiate",
       "majors": ["Not Applicable"],
       "dates": "June 2016 - June 2017",
       "url": "https://www.academyart.edu/",
    }, {
        "name": "Pacific Collegiate School",
        "location": "Santa Cruz",
        "degree": "High School Diploma",
        "majors": ["Not Applicanble"],
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
    var i=0;
    education.schools.forEach(function(school){
    //for(var i = 0; i < education.schools.length; i++){
        $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
             $(".project-entry:last").append(formattedName);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".project-entry:last").append(formattedLocation);

            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".project-entry:last").append(formattedDegree);

            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".project-entry:last").append(formattedMajors);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".project-entry:last").append(formattedDates);

           // var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[i].url);
            //$(".project-entry:last").append(formattedUrl);
    });
    education.onlineCourses.forEach(function(school){
        $("#education").append(HTMLonlineClasses);
        
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $(".project-entry:last").append(formattedSchool);

            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".project-entry:last").append(formattedUrl);
            
    });

};
education.display();
// New Var for testing
var projects = {
    "projects": [
        {
            "title":"Nourish Website",
            "dates":"Jan 2017 - Present",
            "description":"I volunteered to help a group of Stanford Grads with a website (Nourish) that helps cancer patients find healthy food recipes and connect with doctors. I am their front-end engineer and designer. I'm working with a fellow teammate to program the website using Node Js, Html, Css, and such. I'm also creating the User Interface and User Experience design for the website using Adobe Experience Design. For more info, check http://anishajain.weebly.com/nourish.html .",
            "images": ["http://placehold.it/300x200"],
            "link": "wwww.placehold.it",
        }, {
            "title":"DOUGHNUT: Microsoft Winner",
            "dates":"June 2016",
            "description":"My team developed Dough Nut--an app built using Android Studio and Java--will provide young adults the incentive to spend less money, thus save more. With rewards, avatars, and amazing new accessories, young adults would be drawn to this app, as they are to apps such as Plant Nanny. I integrated Artificial Intelligence and Computer Vision Algorithms in this app for text-recognition features, and I created the pitch deck, logos, and art-work.",
            "images": ["http://placehold.it/300x200"],
            "link": "www.placehold.it",
        }
    ]
};
// Testing ends

// var displayProjects = {
//     "projects": [
//         {
//             "title":"Project 1",
//             "dates":"Project Dates",
//             "description":"Project Description",
//             "images": ["Project Image","Project Image"],
//         }, {
//             "title":"Project 2",
//             "dates":"Project Dates",
//             "description":"Project Description",
//             "images": ["Project Image","Project Image"],
//         }
//     ]
// };

// projects.display = function() {
//     projects.projects.forEach(function(project) {
//         $("#projects").append(HTMLprojectStart);

//         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
//         $(".project-entry:last").append(formattedTitle);

//         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
//         $(".project-entry:last").append(formattedDates);

//         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
//         $(".project-entry:last").append(formattedDescription);

//         if (projects.projects[project].images.length > 0) {
//             for (var image in projects.projects[project].images) 
//             projects.projects[project].images.forEach(function(image) {
//                 var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
//                 $(".project-entry:last").append(formattedImage);
//             });
//         }
//     });
// }; 
//Edits made

projects.display = function () {
    'use strict';
    var proj;
    $("#projects").append("<div id=\"projects-foldable-content\"></div>");
    for (proj in projects.projects){
        if (projects.projects.hasOwnProperty(proj)) {
            $("#projects-foldable-content").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", "<a href=\""+ projects.projects[proj].link + "\" target=\"_bkank\">" + projects.projects[proj].title + "</a>"));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[proj].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[proj].description));
            for (var j = 0; j < projects.projects[proj].images.length; j++) {
                 if (projects.projects[proj].images.length > 0) {
                     $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[proj].images[0]));
                }
            }
        }
    }
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