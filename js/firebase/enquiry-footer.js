// Enquiry Form 02
document.getElementById('enquiryForm02').addEventListener('submit', submitFooterForm);

function submitFooterForm(e) {

  e.preventDefault();

  var name = "Footer Enquiry";
  var email = getInput('footerEmail');
  var mobile = "Footer Enquiry";
	var message = "Footer Enquiry";

  $("#enquiryForm02 button").attr("disabled", "true");
  $("#enquiryForm02 input").attr("readonly", "true");
  $("#enquiryForm02 input").css("opacity", ".4");
  $("#enquiryForm02 textarea").css("opacity", ".4");

  $.ajax({

      url:"https://script.google.com/macros/s/AKfycbzIcEqHg8omhIeQV65HBf0ZSUHmKM-q5uUkmh6ROAFlZ4fBiKqZq4wk1blIUrEyNuzE/exec",
      data:$("#enquiryForm02").serialize(),
      method:"post",
      success:function (response){

          saveEnquiry(name, email, mobile, message);
          $("#form-results-footer").text("Successfully Submitted. Our team will contact you back.");
      },
      error:function (err){
          alert("Something Error")

      }
  })
}
