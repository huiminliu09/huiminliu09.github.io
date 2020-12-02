function validateForm() {
  var fname = document.forms["DForm"]["fname"].value;
  var lname = document.forms["DForm"]["lname"].value;
  var email = document.forms["DForm"]["email"].value;
  var address = document.forms["DForm"]["address"].value;
  var sex=document.getElementsByName("sex");
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  var isletter = /^[a-zA-Z]+$/.test(fname);
  var isletter2 = /^[a-zA-Z]+$/.test(lname)
  if (fname == ""||lname == "") {
    alert("Name must be filled out");
    return false;
    document.DForm.fname.focus() ;
  }
  if (!isletter || !isletter2){
  	alert("Name cannot include numbers");
    return false;
    document.DForm.fname.focus() ;


  }
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
    alert("Please enter correct E-mail address")
    document.DForm.email.focus() ;
    return false;
    }
  if (email == "") {
    alert("Email must be filled out");
    return false;
    document.DForm.email.focus() ;
  }
  if (address == "") {
    alert("Address must be filled out");
    return false;
    document.DForm.address.focus() ;
  }
  for (var i = 0; i <sex.length; i++) {
  	if (sex[i].checked==true) {
  		temp=1;
  		break;
  	}
  	else{
  		temp =0;
  	}
  }
  if (temp==0) {
  	alert("Sex must be filled out");
  	document.DForm.Sex.focus() ;
    return false;

  }
  if(true){
  	alert("Thank you for submitting your information!");
  }






}