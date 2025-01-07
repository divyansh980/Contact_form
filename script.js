document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  // document.getElementById("name-error").innerHTML = "I have changed!";
  // Get input field values
  // const name = document.getElementById("name").value.trim();
  // const email = document.getElementById("email").value.trim();
  // const phone = document.getElementById("phone").value.trim();
  // const subject = document.getElementById("subject").value.trim();
  // const message = document.getElementById("message").value.trim

  // Validation message
  // let validationMessage = "";

  // if (!name && !email && !phone && !subject && !message) {
  //   validationMessage = "Please enter your detail.";
  // } else if (!name) {
  //   validationMessage = "Please enter your name.";
  // } else if (!email) {
  //   validationMessage = "Please enter your email.";
  // }else if(!phone){
  //   validationMessage = "Please enter your phone number.";
  // }else if(!subject){
  //   validationMessage = "Please enter your subject.";
  // }else if(!message){
  //   validationMessage = "Please enter your message.";
  // }


  function validate() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
 
    var valid = true;
    
    if(name == ""){
      document.getElementById("name-error").innerText = "Please enter your name.";
      valid = false;
    }
    if (email == "") {
      document.getElementById("email-error").innerText = "Please enter your email.";
      valid = false;
    }
    if (phone == "") {
      document.getElementById("phone-error").innerText = "Please enter your phone number.";
      valid = false;
    }
    if (subject == "") {
      document.getElementById("subject-error").innerText = "Please enter your subject.";
      valid = false;
    }
    if (message == "") {
      document.getElementById("message-error").innerText = "Please enter your message.";
      valid = false;
    }
    

    return valid;
  }

  if (validate()) {
    alert("Form submitted successfully!");
    this.submit();
    
  } else {
    
    alert("error! Please fill required fields.");
  }

});