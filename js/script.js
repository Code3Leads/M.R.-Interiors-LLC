// ==========================
// CONTACT FORM
// ==========================

const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

if (form) {

    form.addEventListener("submit", async function (e) {

        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        const data = {

            name: document.getElementById("name").value,

            business: "mr-interiors",

            phone: document.getElementById("phone").value,

            service: document.getElementById("project").value,

            message: document.getElementById("message").value

        };

        try {

            const response = await fetch(
                "https://show-runner-backend.onrender.com/lead",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data)

                }
            );

            const result = await response.json();

            console.log(result);

            submitBtn.textContent = "Request Received!";

form.reset();

setTimeout(() => {

    submitBtn.disabled = false;

    submitBtn.textContent = "Request Free Estimate";

}, 3000);

        } catch (error) {

            console.error(error);

        }

    });

}