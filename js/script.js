function toggleForm() {
  const form = document.getElementById("testimonialForm");
  form.style.display = form.style.display === "block" ? "none" : "block";
}

function addTestimonial() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const rating = document.getElementById("rating").value;

  if (name === "" || message === "") {
    alert("Please fill all fields");
    return;
  }

  const testimonialList = document.getElementById("testimonialList");

  const newCard = document.createElement("div");
  newCard.classList.add("testimonial-card");

  newCard.innerHTML = `
    <p class="message">"${message}"</p>
    <h4>- ${name}</h4>
    <div class="stars">${"★".repeat(rating)}</div>
  `;

  testimonialList.appendChild(newCard);

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
  document.getElementById("rating").value = "5";

  toggleForm();
}
