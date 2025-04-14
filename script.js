document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      if (name.trim() !== "") {
        alert(`Thank you, ${name}! We received your message.`);
      } else {
        alert("Please enter your name.");
      }
      form.reset();
    });
  });
  
  