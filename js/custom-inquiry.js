const form = document.querySelector("#inquiry-form");

function onFormSubmit(event) {
    console.log("function is running");
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);
    form.reset();
    
    // save variables from form
    const name = dataObject.name;
    const interest = dataObject.name == "employment" ? "seeking employment" : "buying coffee";
    const flavor = dataObject.flavor;
    const comments = dataObject.comments;
    const email = dataObject.email;
    const phone = dataObject.phone;

    // create message
    const message = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${flavor} and your comments are "${comments}." We will soon contact you at ${email} or ${phone}`
    console.log(message);
}

form.addEventListener("submit", onFormSubmit);

/* {
comments: "here is a comment"
email: "rai@anniecannons.com"
flavor: "mocha"
interest: "employment"
name: "Rai Dorzback"
phone: "555-555-5555"
}
*/