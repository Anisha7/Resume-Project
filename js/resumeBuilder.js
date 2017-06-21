/*
This is empty on purpose! Your code to build the resume will go here.
 */



var formattedName = HTMLheaderName.replace("%data%", "Anisha Jain");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
var bio = {
    "name": "Anisha Jain",
    "role": "Front-End Developer",
    "contacts": {
        "email": "anishajain@outlook.com",
        "location": "place",
    },
    "picture": "URL",
    "welcomeMessage": "Hello!",
    "skills": ["HTML", "CSS", "JavaScript", "UI/UX Design"],
};



var work = {
    jobs:[
        {
            "title":"Front End Engineer and UI/UX Designer",
            "employer": "Nourish",
            "date": "Jan 2017 - Present",
            "description": "I volunteered to help a group of Stanford Grads with a website (Nourish) that helps cancer patients find healthy food recipes and connect with doctors. I am their front-end engineer and designer. I'm working with a fellow teammate to program the website using Node Js, Html, Css, and such. I'm also creating the User Interface and User Experience design for the website using Adobe Experience Design.",
        },{
            "title":"Web Developer",
            "employer":"Marine Space Station Project",
            "date":"Jan 2017- June 2017",
            "description": "I programmed and designed the website for our Multi-variable Calculus project. We modeled levels of water contamination and created a model to predict future levels of contamination. I created the map and program to output whether or not the water is safe for human contact at any beach that one may want to visit. This allows the user to choose a beach and get the results.",
        },{
            "title": "Organizer of the Santa Cruz Teen Entrepreneur Challenge",
            "employer": "Santa Cruz TECH",
            "date": "Dec 2016 - Feb 2017",
            "description": "I am part of the SCTECH team, who put together a hackathon for junior and high school students in hopes of bringing such opportunities to the Santa Cruz student body. This event took place at the Museum of Art and History on Feb 25. I designed logos, brochures, creative name tags, certificates, art work, and a lot more. I also reached out to sponsors and speakers, worked on emails, and helped with advertising. I also assisted the design workshops, and mentored students who needed help with design tools such as Adobe Softwares and Invision. It was an amazing experience for me and my peers. We witnessed world-changing projects come to life, and promoted students to continue to develop and publish these projects.",
        }, {
            "title": "Choreographer and Performer",
            "employer": "Pacific Collegiate School Dance Company",
            "date": "June 2015 - Feb 2017",
            "description": "I choreographed and participated in various dances for the PCS Dance Company performances. I worked with Hip-hop, Contemporary, and Bollywood. I taught my choreography to a group of students, preparing them for the performance.",
        }, {
            "title":"Android Developer and UI/UX Designer",
            "employer": "Microsoft'We Hack Too!'",
            "date": "June 2016",
            "description": "My team developed an app to teach young adults how to manage their budget. Key Technologies included Android, Artificial Intelligence, Computer Vision, OCR, Adobe Illustrator, Microsoft Powerpoint. Self-taught JAVA and Android Studio.",
        }
    ]
}


var education = {
    "schools": [
    {
       "schoolName": "Academy of Art University",
       "city": "San Francisco",
    }, {
        "schoolName": "Pacific Collegiate School",
        "city": "Santa Cruz",
    }]
}

/* banner */

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

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

/* bio */
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);


/* work */
$("#main").append(work["position"]);
$("#main").append(work["company"]);

/* education */
$("#main").append(education.school);


function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }  
}

displayWork();