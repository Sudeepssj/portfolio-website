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
        leadForm.querySelector("textarea").value

    };

    const submitBtn =
    document.querySelector(".submit-btn");

    submitBtn.innerHTML =
    "Sending...";

    try{

        const response =
        await fetch(scriptURL, {

            method:"POST",

            body:JSON.stringify(formData)

        });

        const result =
        await response.json();

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