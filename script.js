function hoverOption(element){
    element.classList.toggle("text-gray-900");
    element.classList.toggle("text-indigo-500");
}

function showAlert(){
    alert("Thank you for trusting us and Signing up.")
    console.log("User clicked on sign up.")
}
function getStarted(){
    confirm("Are you ready to get started?")
    console.log("User clicked on get started.")
}
function submit(){
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        
        alert("Please fill in all the required fields.");
    } 
    else {
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        console.log('Message: ' + message);

        alert("Your response has been submitted, thank you.");
    }
});
}
submit();
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function updateActiveLink() {
    var sections = document.querySelectorAll("section");
    var headerLinks = document.querySelectorAll("nav a");
    
    sections.forEach((section, index) => {
        if (isInViewport(section)) {
            headerLinks.forEach(link => link.classList.remove("active"));
            headerLinks[index].classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();
