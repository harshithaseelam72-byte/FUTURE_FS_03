const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Thank you for contacting Taste Haven! We will get back to you soon."
    );

    this.reset();
});