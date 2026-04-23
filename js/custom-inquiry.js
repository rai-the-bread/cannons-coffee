const form = document.querySelector("#inquiry-form");

function onFormSubmit(event) {
  console.log("function is running");
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);
  form.reset();
}

form.addEventListener("submit", onFormSubmit);
