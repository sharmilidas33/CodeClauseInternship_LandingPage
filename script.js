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