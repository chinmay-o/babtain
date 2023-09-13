let enquiryRef = firebase.database().ref('enquiry-database');

function saveEnquiry(name, email, mobile, message) {

  var newEnquiry = enquiryRef.push();
  newEnquiry.set({

		timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
    name: name,
    email: email,
    mobile: mobile,
    message: message,
  })
  .then(function() {

    console.log('Synchronization succeeded');

    $("#enquiryForm01 button").removeAttr("disabled");
    $("#enquiryForm01 input").removeAttr("readonly");
    $("#enquiryForm01 input").css("opacity", "1");
    $("#enquiryForm01 textarea").css("opacity", "1");
    $('#enquiryForm01')[0].reset();
    $("#form-results").css("display", "block");
    $("#form-results").text("Successfully Submitted. Our team will contact you back.");
  })
  .catch(function(error) {

    console.log('Synchronization failed');
    $("#form-results").css("display", "block");
    $("#form-results").text("Failed Submission. Try again after reloading.");
  });
}


// General Function
function getInput(id) {

  return document.getElementById(id).value;
}
