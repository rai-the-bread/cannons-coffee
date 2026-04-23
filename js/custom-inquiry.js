const form = document.querySelector("#inquiry-form");
const inquiryMessage = document.querySelector(".inquiry-message p");
const h2 = document.querySelector("#form-container h2");
const orderAgain = document.querySelector("#order-again");

function onFormSubmit(event) {
    console.log("function is running");
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);
    form.reset();
    
    // save variables from form
    const name = dataObject.name;
    const interest = dataObject.interest == "employment" ? "seeking employment" : "buying coffee";
    const flavor = dataObject.flavor;
    const comments = dataObject.comments;
    const email = dataObject.email;
    const phone = dataObject.phone;

    // create message
    const message = `We appreciate your interest in ${interest}. Your favorite coffee flavor is ${flavor || "N/A"} and your comments are "${comments || "N/A"}." We will soon contact you at ${email} or ${phone}`;

    showMessage(message, name);
};

function showMessage(message, name) {
    form.classList.add("hidden");
    orderAgain.classList.remove("hidden");
    inquiryMessage.classList.remove("hidden");
    // create paragraph
    h2.textContent = `Thanks for ordering, ${name}!`;
    inquiryMessage.textContent = message;
};

form.addEventListener("submit", onFormSubmit);
orderAgain.addEventListener("click", () => {
    form.classList.remove("hidden")
    orderAgain.classList.add("hidden");
    inquiryMessage.classList.add("hidden");
    h2.textContent = "Order A Drink";
});