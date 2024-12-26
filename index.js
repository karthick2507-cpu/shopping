// name;
// email;
// subject;
// url;
// desp;
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let url = document.getElementById("url");
let desp = document.getElementById("desp");

function formValidation() {
  //     console.log("sfldvsnkb")
  //   if (
  //     fullName == "" &&
  //     email == "" &&
  //     subject == "" &&
  //     url == "" &&
  //     desp == ""
  //   ) {
  //     alert("Fill the input field");
  //   } else
  if (fullName.value === "") {
    alert("Enter the name ");
  } else if (email.value ==="") {
    alert("Enter the valid email");
  } else if (subject.value === "") {
    alert("Enter the subject");
  } else if (url.value === "") {
    alert("Enter the URL");
  } else if (desp.value === "") {
    alert("Enter the description");
  }else{
    alert("form submitted sucessfully")
  }
}
