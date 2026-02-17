const form = document.getElementById("testimonialForm");
const list = document.getElementById("testimonialList");

// Default testimonials
let testimonials = JSON.parse(localStorage.getItem("testimonials")) || [
{
name: "Emily R.",
message: "Amazing service — highly recommended!",
rating: 5
},
{
name: "Sophia L.",
message: "Professional and friendly experience.",
rating: 5
}
];

function saveTestimonials() {
localStorage.setItem("testimonials", JSON.stringify(testimonials));
}

function renderTestimonials() {
list.innerHTML = "";

testimonials.reverse().forEach(t => {

const stars = "★".repeat(t.rating);

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h4>${t.name}</h4>
<div class="stars">${stars}</div>
<p>${t.message}</p>
`;

list.appendChild(card);

});

}

form.addEventListener("submit", e => {
e.preventDefault();

const newTestimonial = {
name: document.getElementById("name").value,
message: document.getElementById("message").value,
rating: parseInt(document.getElementById("rating").value)
};

testimonials.push(newTestimonial);

saveTestimonials();
renderTestimonials();

form.reset();
});

renderTestimonials();
