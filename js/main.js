// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// ================= CONTACT MODAL =================

const hireBtn = document.getElementById("hireBtn");

const contactModal = document.getElementById("contactModal");

const closeContact = document.getElementById("closeContact");

const contactOverlay = document.getElementById("contactOverlay");

// OPEN

hireBtn.addEventListener("click", () => {

    contactModal.classList.add("active");

});

// CLOSE BUTTON

closeContact.addEventListener("click", () => {

    contactModal.classList.remove("active");

});

// OVERLAY CLOSE

contactOverlay.addEventListener("click", () => {

    contactModal.classList.remove("active");

});

// ================= FORM SUBMIT =================

// FORM

const leadForm =
document.getElementById("leadForm");

// GOOGLE SCRIPT URL

const scriptURL =
"https://script.google.com/macros/s/AKfycbyMZlK0q5i5UTFeuVgmrbSX5cu_YOu3LH1grQkmTvk-9MxSLq-wfKX33ET5N2A_ERRQ/exec";

// ================= GOOGLE SHEET FUNCTION =================

async function submitToGoogleSheet(data){

    const response = await fetch(scriptURL,{

        method:"POST",

        body:JSON.stringify(data)

    });

    return await response.json();

}

leadForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = {

        name:
        leadForm.querySelectorAll("input")[0].value,

        email:
        leadForm.querySelectorAll("input")[1].value,

        project:
        leadForm.querySelector("select").value,

        budget:
        leadForm.querySelectorAll("input")[2].value,

        message:
        leadForm.querySelector("textarea").value,

        source:"Hire Me Modal"

    };

    const submitBtn =
    document.querySelector(".submit-btn");

    submitBtn.innerHTML =
    "Sending...";

    try{

        const result =
        await submitToGoogleSheet(formData);

        if(result.success){

            showToast("🚀 Inquiry Submitted Successfully!");

            leadForm.reset();

            contactModal.classList.remove("active");
            
            const whatsappMessage =
`Hello Sudeep,

I submitted a new project inquiry.

Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.project}
Budget: ₹${formData.budget}

Message:
${formData.message}

Looking forward to discussing the project with you.`;

            window.location.href =

            `https://wa.me/917907318517?text=${encodeURIComponent(whatsappMessage)}`;

        }

    }

    catch(error){

        console.log(error);

        showToast("❌ Submission Failed!");

    }

    submitBtn.innerHTML =
    `
    <i class="ri-send-plane-line"></i>
    Submit Inquiry
    `;

});

// ================= TOAST =================

function showToast(message){

    const toast =
    document.createElement("div");

    toast.classList.add("toast");

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}


const aboutToggleBtn =
document.getElementById("aboutToggleBtn");

const aboutExtra =
document.getElementById("aboutExtra");

aboutToggleBtn.addEventListener("click", () => {

    aboutExtra.classList.toggle("active");

    if(aboutExtra.classList.contains("active")){

        aboutToggleBtn.innerHTML = `
            Show Less
            <i class="ri-arrow-up-s-line"></i>
        `;

    }

    else{

        aboutToggleBtn.innerHTML = `
            Read More
            <i class="ri-arrow-down-s-line"></i>
        `;

    }

});

const skillToggle =
document.getElementById("skillToggle");

const moreSkills =
document.getElementById("moreSkills");

skillToggle.addEventListener("click",()=>{

    if(moreSkills.style.display==="block"){

        moreSkills.style.display="none";

        skillToggle.innerHTML=
        `Explore More Technologies <i class="ri-arrow-down-s-line"></i>`;

    }else{

        moreSkills.style.display="block";

        skillToggle.innerHTML=
        `Hide Technologies <i class="ri-arrow-up-s-line"></i>`;

    }

});



// ================= CONTACT FORM =================

const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit",async(e)=>{

    e.preventDefault();

    const formData={

        name:
        contactForm.querySelectorAll("input")[0].value,

        email:
        contactForm.querySelectorAll("input")[1].value,

        project:
        contactForm.querySelectorAll("input")[2].value,

        budget:"",

        message:
        contactForm.querySelector("textarea").value,

        source:"Contact Section"

    };

    const btn=
    contactForm.querySelector("button");

    btn.innerHTML="Sending...";

    try{

        const result=
        await submitToGoogleSheet(formData);

        if(result.success){

            showToast("✅ Message Sent Successfully!");

            contactForm.reset();

        }

    }

    catch(error){

        console.log(error);

        showToast("❌ Submission Failed!");

    }

    btn.innerHTML=`
        Send Message
        <i class="ri-send-plane-line"></i>
    `;

});

// =====================================================
// PROJECT DETAILS MODAL
// =====================================================

const projectModal =
    document.getElementById("projectModal");

const projectModalClose =
    document.getElementById("projectModalClose");

const projectModalOverlay =
    document.getElementById("projectModalOverlay");

const modalProjectImage =
    document.getElementById("modalProjectImage");

const modalProjectTitle =
    document.getElementById("modalProjectTitle");

const modalProjectOverview =
    document.getElementById("modalProjectOverview");

const modalProjectFeatures =
    document.getElementById("modalProjectFeatures");

const modalProjectTech =
    document.getElementById("modalProjectTech");

const modalProjectChallenges =
    document.getElementById("modalProjectChallenges");

const modalProjectLearning =
    document.getElementById("modalProjectLearning");

const modalGithub =
    document.getElementById("modalGithub");

const modalLiveDemo =
    document.getElementById("modalLiveDemo");

const modalDeployment =
    document.getElementById("modalDeployment");


// =====================================================
// PROJECT DATA
// =====================================================

const projectData = {

    // ================= SMART TOURISM =================

    "smart-tourism": {

        title: "Smart Tourism Platform",

        image: "./assets/images/tourism-project.png",

        overview:
            "A complete tourism management system that helps users discover destinations, explore packages, make bookings and manage tours through a modern dashboard.",

        features: [

            "User authentication and profile management",

            "Tourism destination and package discovery",

            "Tour booking management",

            "Booking status tracking",

            "User dashboard",

            "Modern responsive interface"

        ],

        tech: [
            "Django",
            "MySQL",
            "JavaScript",
            "Tailwind CSS"
        ],

        challenges:
            "Building a complete tourism workflow that connects users, tourism services, bookings and dashboard management into one system.",

        learning:
            "Improved my understanding of Django application architecture, database relationships, authentication, booking workflows and responsive UI development.",

        github:
            "https://github.com/Sudeepssj/smart-tourism-system",

        liveDemo: ""

    },


    // ================= PET ADOPTION =================

    "pet-adoption": {

        title: "Pet Adoption Platform",

        image: "./assets/images/pet-adoption.png",

        overview:
            "A web platform designed to manage pet listings, adoption requests and interactions between users and available pets.",

        features: [

            "Pet listing management",

            "Pet adoption requests",

            "User authentication",

            "Pet information management",

            "User interactions",

            "Responsive web interface"

        ],

        tech: [
            "Django",
            "MySQL",
            "JavaScript"
        ],

        challenges:
            "Designing the adoption workflow and organizing the relationship between users, pets and adoption requests.",

        learning:
            "Strengthened my understanding of Django models, CRUD operations, authentication and database relationships.",

        github:
            "https://github.com/Sudeepssj/Pet-adoption-management-system",

        liveDemo: ""

    },


    // ================= EXPENSE TRACKER =================

    "expense-tracker": {

        title: "Expense Tracker",

        image: "./assets/images/expense-tracker.png",

        overview:
            "A Django-based expense management application that helps users track spending, manage categories and visualize financial data.",

        features: [

            "Add and manage expenses",

            "Expense CRUD operations",

            "Category-wise tracking",

            "Monthly expense summary",

            "Interactive charts",

            "AJAX-based dynamic interactions"

        ],

        tech: [
            "Django",
            "SQLite",
            "Chart.js",
            "AJAX",
            "Bootstrap"
        ],

        challenges:
            "Organizing expense data and presenting financial information clearly through dynamic summaries and visual charts.",

        learning:
            "Learned more about Django CRUD systems, database relationships, AJAX interactions and data visualization using Chart.js.",

        github:
            "https://github.com/Sudeepssj/Expense-tracker-web-app",

        liveDemo: ""

    },


    // ================= DIGITAL SMART CARD =================

    "smart-card": {

        title: "Digital Smart Card",

        image: "./assets/images/smart-card.png",

        overview:
            "A professional digital business card that allows users to share their profile, contact information and social links through a modern shareable interface.",

        features: [

            "Digital professional profile",

            "Contact information",

            "Social media links",

            "QR code sharing",

            "Save contact functionality",

            "Shareable profile"

        ],

        tech: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        challenges:
            "Creating a professional digital identity that works smoothly across desktop and mobile devices while keeping the interface simple and shareable.",

        learning:
            "Improved my frontend development skills, responsive design, QR integration and interactive UI development.",

        github:
            "https://github.com/Sudeepssj/Digital-smart-card-system",

        // IMPORTANT:
        // Put your real Digital Smart Card deployment URL here.
        liveDemo: "https://smartcard7907.netlify.app/?v=2ho"

    },


    // ================= EDULEARN LMS =================

    "edulearn": {

        title: "EduLearn LMS",

        image: "./assets/images/edulearn-lms.png",

        overview:
            "A full-stack Learning Management System built with Django that allows instructors to create and manage courses, students to enroll and learn, and administrators to monitor the platform.",

        features: [

            "Role-based authentication",

            "Admin dashboard",

            "Instructor dashboard",

            "Create, edit and delete courses",

            "Student course enrollment",

            "Student learning dashboard",

            "Profile management",

            "Login and logout system",

            "Responsive modern UI"

        ],

        tech: [
            "Django",
            "HTML",
            "CSS",
            "Bootstrap",
            "Tailwind CSS",
            "SQLite",
            "Django Authentication"
        ],

        challenges:
            "Implementing role-based access for Admin, Instructor and Student users while keeping the course management and enrollment workflows organized.",

        learning:
            "Strengthened my understanding of Django authentication, role-based systems, CRUD operations, database relationships, dashboard design and deployment.",

        github:
            "https://github.com/Sudeepssj/Edulearn-lms",

        liveDemo:
            "https://lms-project-7s45.onrender.com"

    },


    // ================= NEXUSCHAT =================

    "nexuschat": {

        title: "NexusChat",

        image: "./assets/images/nexuschat.png",

        overview:
            "A full-stack real-time chat application built with Django Channels and WebSockets, supporting direct messaging, group rooms, presence updates and live notifications.",

        features: [

            "Real-time messaging using WebSockets",

            "One-to-one chat",

            "Group chat rooms",

            "Live typing indicators",

            "Online and offline presence",

            "Real-time notifications",

            "Live user and room search",

            "User authentication",

            "Admin dashboard",

            "Responsive dark UI"

        ],

        tech: [
            "Django",
            "Django Channels",
            "WebSockets",
            "SQLite",
            "Bootstrap",
            "jQuery",
            "Daphne"
        ],

        challenges:
            "Implementing real-time communication using Django Channels and WebSockets while managing chat rooms, message delivery and user presence.",

        learning:
            "Learned how WebSockets work with Django ASGI, Django Channels consumers, routing, real-time events and asynchronous communication.",

        github:
            "https://github.com/Sudeepssj/Nexuschat",

        liveDemo:
            ""

    }

};


// =====================================================
// OPEN PROJECT MODAL
// =====================================================

const projectDetailsButtons =
    document.querySelectorAll(".project-details-btn");


projectDetailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectId =
            button.dataset.project;

        const project =
            projectData[projectId];

        if(!project){
            console.log("Project data not found:", projectId);
            return;
        }


        // IMAGE

        modalProjectImage.src =
            project.image;

        modalProjectImage.alt =
            project.title + " Screenshot";


        // BASIC INFO

        modalProjectTitle.textContent =
            project.title;

        modalProjectOverview.textContent =
            project.overview;


        // FEATURES

        modalProjectFeatures.innerHTML = "";

        project.features.forEach(feature => {

            const li =
                document.createElement("li");

            li.textContent =
                feature;

            modalProjectFeatures.appendChild(li);

        });


        // TECH STACK

        modalProjectTech.innerHTML = "";

        project.tech.forEach(technology => {

            const span =
                document.createElement("span");

            span.textContent =
                technology;

            modalProjectTech.appendChild(span);

        });


        // CHALLENGES

        modalProjectChallenges.textContent =
            project.challenges;


        // LEARNING

        modalProjectLearning.textContent =
            project.learning;


        // GITHUB

        if(project.github){

            modalGithub.href =
                project.github;

            modalGithub.style.display =
                "flex";

        }

        else{

            modalGithub.style.display =
                "none";

        }


        // LIVE DEMO

        if(project.liveDemo){

            modalLiveDemo.href =
                project.liveDemo;

            modalLiveDemo.style.display =
                "flex";

            modalDeployment.style.display =
                "none";

        }

        else{

            modalLiveDemo.style.display =
                "none";

            modalDeployment.style.display =
                "flex";

        }


        // OPEN

        projectModal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


// =====================================================
// CLOSE PROJECT MODAL
// =====================================================

function closeProjectModal(){

    projectModal.classList.remove("active");

    document.body.style.overflow =
        "";

}


// CLOSE BUTTON

projectModalClose.addEventListener(
    "click",
    closeProjectModal
);


// OVERLAY

projectModalOverlay.addEventListener(
    "click",
    closeProjectModal
);


// ESC KEY

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        closeProjectModal();

    }

});


// =========================================================
// FLOATING QUICK ACTIONS
// =========================================================

const floatingActions =
    document.getElementById("floatingActions");

const floatingShareBtn =
    document.getElementById("floatingShareBtn");

const sharePortfolioBtn =
    document.getElementById("sharePortfolioBtn");

const copyPortfolioBtn =
    document.getElementById("copyPortfolioBtn");

const floatingContactBtn =
    document.getElementById("floatingContactBtn");

const portfolioURL =
    "https://sudeep-developer-portfolio.netlify.app/?v=2ho";


// =========================================================
// OPEN / CLOSE QUICK ACTIONS
// =========================================================

floatingShareBtn.addEventListener("click", () => {

    const isActive =
        floatingActions.classList.toggle("active");

    floatingShareBtn.setAttribute(
        "aria-expanded",
        isActive
    );

});


// =========================================================
// SHARE PORTFOLIO
// =========================================================

sharePortfolioBtn.addEventListener("click", async () => {

    const shareData = {
        title: "Sudeep Singh Jadoun | Software Developer Portfolio",
        text: "Check out Sudeep Singh Jadoun's Software Developer Portfolio.",
        url: portfolioURL
    };


    // ============================================
    // PHONE / SECURE WEBSITE
    // ============================================

    if (
        navigator.share &&
        window.isSecureContext
    ) {

        try {

            await navigator.share(shareData);

            return;

        } catch (error) {

            // User cancelled sharing
            if (error.name === "AbortError") {
                return;
            }

            console.log("Native share failed:", error);
        }
    }


    // ============================================
    // DESKTOP / LIVE SERVER FALLBACK
    // ============================================

    copyPortfolioLink();

});


// =========================================================
// COPY PORTFOLIO LINK
// =========================================================

function copyPortfolioLink() {

    const textArea =
        document.createElement("textarea");

    textArea.value =
        portfolioURL;

    textArea.style.position =
        "fixed";

    textArea.style.left =
        "-9999px";

    textArea.style.top =
        "0";

    textArea.style.opacity =
        "0";

    document.body.appendChild(
        textArea
    );

    textArea.focus();

    textArea.select();

    textArea.setSelectionRange(
        0,
        textArea.value.length
    );


    let copied = false;

    try {

        copied =
            document.execCommand("copy");

    } catch (error) {

        console.log(
            "Copy error:",
            error
        );

    }


    document.body.removeChild(
        textArea
    );


    if (copied) {

        showToast(
            "✓ Portfolio link copied!"
        );

    } else {

        showToast(
            "Please copy the portfolio URL manually."
        );

    }

}


// =========================================================
// COPY BUTTON
// =========================================================

copyPortfolioBtn.addEventListener(
    "click",
    copyPortfolioLink
);

// =========================================================
// CONTACT ME
// =========================================================

floatingContactBtn.addEventListener("click", () => {

    contactModal.classList.add("active");

    floatingActions.classList.remove("active");

    floatingShareBtn.setAttribute(
        "aria-expanded",
        "false"
    );

});



// =========================================================
// PWA SERVICE WORKER
// =========================================================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")
            .then((registration) => {

                console.log(
                    "PWA Service Worker registered:",
                    registration.scope
                );

            })
            .catch((error) => {

                console.error(
                    "PWA Service Worker registration failed:",
                    error
                );

            });

    });

}