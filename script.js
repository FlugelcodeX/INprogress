/* =========================================
   CYBER SITE UNDER CONSTRUCTION
========================================= */

/* =========================================
   CIRCUIT NODE EFFECT
========================================= */

const nodes = document.querySelectorAll(".node");

nodes.forEach((node, index) => {
  node.style.animationDelay = `${index * 0.3}s`;
});

/* =========================================
   CONTACT FORM
   FORMSUBMIT AJAX
========================================= */

const form = document.getElementById("projectForm");

const button = document.getElementById("submitButton");

const formStatus = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", async function (event) {
    /*
     * Stop FormSubmit from redirecting
     * the visitor to another page.
     */

    event.preventDefault();

    /* =================================
               SENDING STATE
            ================================= */

    button.classList.add("sending");

    button.classList.remove("success");

    button.querySelector("span").textContent = "TRANSMITTING...";

    button.querySelector("strong").textContent = "•••";

    formStatus.classList.remove("form-success", "form-error");

    formStatus.textContent = "Establishing secure connection...";

    try {
      /* =================================
                   COLLECT FORM DATA
                ================================= */

      const formData = new FormData(form);

      /* =================================
                   SEND TO FORMSUBMIT
                ================================= */

      const response = await fetch(form.action, {
        method: "POST",

        body: formData,

        headers: {
          Accept: "application/json",
        },
      });

      /* =================================
                   READ RESPONSE
                ================================= */

      const result = await response.json();

      /* =================================
                   SUCCESS
                ================================= */

      if (response.ok) {
        button.classList.remove("sending");

        button.classList.add("success");

        button.querySelector("span").textContent = "MESSAGE SENT";

        button.querySelector("strong").textContent = "✓";

        formStatus.classList.add("form-success");

        formStatus.textContent =
          "✓ Message received. I'll get back to you soon.";

        /* =================================
                       CLEAR FORM
                    ================================= */

        form.reset();

        /* =================================
                       RESET BUTTON
                    ================================= */

        setTimeout(
          () => {
            button.classList.remove("success");

            button.querySelector("span").textContent = "SEND PROJECT REQUEST";

            button.querySelector("strong").textContent = "→";

            formStatus.classList.remove("form-success");

            formStatus.textContent =
              "Your message will be sent directly to my email.";
          },

          6000,
        );
      } else {
        /* =================================
                   ERROR FROM FORMSUBMIT
                ================================= */
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      /* =================================
               CONNECTION ERROR
            ================================= */

      console.error("Form submission error:", error);

      button.classList.remove("sending");

      button.querySelector("span").textContent = "TRY AGAIN";

      button.querySelector("strong").textContent = "↻";

      formStatus.classList.add("form-error");

      formStatus.textContent = "Unable to send the message. Please try again.";

      /* Reset */

      setTimeout(
        () => {
          button.querySelector("span").textContent = "SEND PROJECT REQUEST";

          button.querySelector("strong").textContent = "→";

          formStatus.classList.remove("form-error");

          formStatus.textContent =
            "Your message will be sent directly to my email.";
        },

        5000,
      );
    }
  });
}

/* =========================================
   FLOATING CODE
========================================= */

const codeElements = document.querySelectorAll(".code-float");

const codeCharacters = [
  "</>",
  "{ }",
  "01",
  "101",
  "0xFF",
  "++",
  "//",
  "SYS",
  "OK",
  "...",
];

setInterval(
  () => {
    codeElements.forEach((element) => {
      const random =
        codeCharacters[Math.floor(Math.random() * codeCharacters.length)];

      element.textContent = random;
    });
  },

  2500,
);
