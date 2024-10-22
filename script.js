
//-------------- ACCORDION =============
document.querySelectorAll('.accordion-item h2').forEach((accordionToggle) => { 
    accordionToggle.addEventListener('click', () => { 
    const accordionItem = accordionToggle.parentNode; 
    const accordionContent = accordionToggle.nextElementSibling; 
  
          // If this accordion item is already open, close it.
     if (accordionContent.style.maxHeight) { 
         accordionContent.style.maxHeight = null; 
         accordionItem.classList.remove('active'); 
        } else {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
              accordionItem.classList.add('active'); 
          }
      });
  });

// =================  CONTACT FORM VALIDATIONS ====================
  // Function to validate form inputs
  function validateForm() {
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();

      // Basic validation for name, email, and message
      if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields.");
          return false;
      }

      // Validation for name: only letters and spaces allowed
      var nameRegex = /^[a-zA-Z\s]*$/;
      if (!nameRegex.test(name)) {
          alert("Please enter a valid name (letters and spaces only).");
          return false;
      }

      // Email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return false;
      }

      return true;
  }

  // Function to handle form submission
  function handleSubmit(event) {
      event.preventDefault(); // Prevent default form submission

      if (validateForm()) {
          // If form is valid, save data to local storage
          var formData = {
              name: document.getElementById("name").value.trim(),
              email: document.getElementById("email").value.trim(),
              message: document.getElementById("message").value.trim()
          };

          // Convert formData object to JSON string
          var formDataJson = JSON.stringify(formData);

          // Save data to local storage
          localStorage.setItem("contactFormData", formDataJson);

          // Optionally, you can clear the form fields after submission
          document.getElementById("contactForm").reset();

          // Display alert
          alert("Form submitted successfully!");
      }
  }

  // Attach handleSubmit function to form submit event
  document.getElementById("contactForm").addEventListener("submit", handleSubmit);

//-------------- FEEDBACK FORM VALIDATIONS ==================

     