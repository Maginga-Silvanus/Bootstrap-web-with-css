const form = document.getElementById("testimonialForm");
const list = document.getElementById("testimonialList");

let testimonials = JSON.parse(localStorage.getItem("clinicTestimonials")) || [
{
name: "Judith O.",
message: "The treatment results exceeded my expectations. My skin feels renewed and radiant.",
rating: 5,
recommend: true
},
{
name: "Jezreal Benadatte",
message: "Professional, gentle, and effective care. I trust them completely.",
rating: 5,
recommend: true
}
];

function saveData() {
localStorage.setItem("clinicTestimonials", JSON.stringify(testimonials));
}

function renderTestimonials() {
list.innerHTML = "";

[...testimonials].reverse().forEach(t => {

const stars = "★★★★★".slice(0, t.rating);

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<div class="quote">“</div>
<p>${t.message}</p>
<div class="name">${t.name}
${t.recommend ? '<span class="badge">✓ Recommends</span>' : ''}
</div>
<div class="stars">${stars}</div>
`;

list.appendChild(card);

});
}

form.addEventListener("submit", e => {
e.preventDefault();

const newReview = {
name: document.getElementById("name").value,
message: document.getElementById("message").value,
rating: parseInt(document.getElementById("rating").value),
recommend: document.getElementById("recommend").checked
};

testimonials.push(newReview);

saveData();
renderTestimonials();
form.reset();
});

renderTestimonials();
