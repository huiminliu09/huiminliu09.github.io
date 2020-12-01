function validateForm() {
  var fname = document.forms["DForm"]["fname"].value;
  var lname = document.forms["DForm"]["lname"].value;
  var email = document.forms["DForm"]["email"].value;
  var address = document.forms["DForm"]["address"].value;
  if (fname == ""||lname == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (address == "") {
    alert("Address must be filled out");
    return false;
  }


}