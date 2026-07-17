const buttons = document.querySelectorAll(".copyBtn");

buttons.forEach(button => {

    button.addEventListener("click", async () => {

        const email = button.previousElementSibling.innerText;

        await navigator.clipboard.writeText(email);

        button.textContent = "✓ Copied!";

        setTimeout(() => {

            button.textContent = "Copy Email";

        }, 2000);

    });

});

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️";

        }

        else {

            themeToggle.textContent = "🌙";

        }

    });

}