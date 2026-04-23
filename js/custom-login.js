const form = document.querySelector("#login-form");
const loginMessage = document.querySelector(".login-message p");
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
    const email = dataObject.email;
    const password = dataObject.password;

    showMessage(name);
};

function showMessage(name) {
    form.classList.add("hidden");
    orderAgain.classList.remove("hidden");
    // create paragraph
    h2.textContent = `Welcome, ${name}! You are logged in!`;
};

form.addEventListener("submit", onFormSubmit);
orderAgain.addEventListener("click", () => {
    form.classList.remove("hidden")
    orderAgain.classList.add("hidden");
    loginMessage.classList.add("hidden");
    h2.textContent = "Order A Drink";
});