document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  function validate() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject") ? document.getElementById("subject").value.trim() : ""; // Optional field
    const message = document.getElementById("message").value.trim();

    let valid = true;

    // Clear previous error messages
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("phone-error").innerText = "";
    if (document.getElementById("subject-error")) {
      document.getElementById("subject-error").innerText = "";
    }
    document.getElementById("message-error").innerText = "";

    // Name validation (letters only)
    if (name === "") {
      document.getElementById("name-error").innerText = "Please enter your name.";
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      document.getElementById("name-error").innerText = "Name can only contain letters.";
      valid = false;
    }

    // Email validation
    if (email === "") {
      document.getElementById("email-error").innerText = "Please enter your email.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("email-error").innerText = "Please enter a valid email address.";
      valid = false;
    }

    // // Phone validation (10 digits only)
    // if (phone === "") {
    //   document.getElementById("phone-error").innerText = "Please enter your phone number.";
    //   valid = false;
    // } else if (!/^d{10}$/.test(phone)) {
    //   document.getElementById("phone-error").innerText = "Phone number must be exactly 10 digits.";
    //   valid = false;
    // }else{
    //   document.getElementById("phone-error").innerText = "";
    // }


      // Phone validation
  if (phone === "") {
    document.getElementById("phone-error").innerText = "Please enter your phone number.";
    valid = false;
  } else if (!/^\d+$/.test(phone)) {
    document.getElementById("phone-error").innerText = "Phone number must contain only digits.";
    valid = false;
  } else if (phone.length !== 10) {
    document.getElementById("phone-error").innerText = "Phone number must be exactly 10 digits.";
    valid = false;
  } else {
    document.getElementById("phone-error").innerText = ""; // Clear the error if valid
  }


    // Subject validation (if applicable)
    if (subject !== undefined && subject === "") {
      document.getElementById("subject-error").innerText = "Please enter your subject.";
      valid = false;
    }

    // Message validation
    if (message === "") {
      document.getElementById("message-error").innerText = "Please enter your message.";
      valid = false;
    }

    return valid;
  }

  if (validate()) {
    alert("Form submitted successfully!");
    this.submit(); // Submit the form
  } else {
    alert("Error! Please fill required fields.");
  }
});





// document.getElementById("contact-form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent form submission

//   function validate() {
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phone = document.getElementById("phone").value.trim();
//     const subject = document.getElementById("subject").value.trim();
//     const message = document.getElementById("message").value.trim();
 
//     var valid = true;
    
//     if(name == ""){
//       document.getElementById("name-error").innerText = "Please enter your name.";
//       valid = false;
//     }
//     if (email == "") {
//       document.getElementById("email-error").innerText = "Please enter your email.";
//       valid = false;
//     }
//     if (phone == "") {
//       document.getElementById("phone-error").innerText = "Please enter your phone number.";
//       valid = false;
//     }
//     if (subject == "") {
//       document.getElementById("subject-error").innerText = "Please enter your subject.";
//       valid = false;
//     }
//     if (message == "") {
//       document.getElementById("message-error").innerText = "Please enter your message.";
//       valid = false;
//     }
    

//     return valid;
//   }

//   if (validate()) {
//     alert("Form submitted successfully!");
//     this.submit();
    
//   } else {
    
//     alert("error! Please fill required fields.");
//   }

// });

