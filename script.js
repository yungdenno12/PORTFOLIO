$(document).ready(function() {

    // ===============================
    // CONTACT FORM VALIDATION
    // ===============================

    $("#contact-form").on("submit", function(e) {
        e.preventDefault();

        let subject = $("#subject").val().trim();
        let email   = $("#email").val().trim();
        let phone   = $("#phone").val().trim();
        let message = $("#message").val().trim();

        if(subject === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields!");
            return;
        }

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
        if(!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        let phonePattern = /^[0-9]{10,15}$/;
        if(!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (10-15 digits)");
            return;
        }

        alert("Message sent successfully!");
        $("#contact-form")[0].reset();
    });


    // ===============================
    // PROJECT HOVER EFFECT
    // ===============================

    $(".project-card").hover(
        function() {
            $(this).find("img").fadeIn(300);
            $(this).find("h3").fadeOut(300);
        },
        function() {
            $(this).find("img").fadeOut(300);
            $(this).find("h3").fadeIn(300);
        }
    );

    // Optional: simple hover effect (example: alert on click)
$(".project-card a").click(function(e) {
    e.preventDefault(); // prevent actual navigation
    alert("Project page coming soon!");
});

    // HAMBURGER TOGGLE
$("#hamburger").click(function() {
    $("#nav-menu ul").toggleClass("show");
});

});