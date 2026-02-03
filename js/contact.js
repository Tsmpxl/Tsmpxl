const form = document.getElementById("contactForm");

form.addEventListener("submit", () => {
  setTimeout(() => {
    form.reset();
  }, 100);
});




form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" }
  }).then(() => {
    form.reset();
    alert("Message sent successfully!");
  });
});