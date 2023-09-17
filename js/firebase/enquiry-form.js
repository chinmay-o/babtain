// Enquiry Form 01
document.getElementById('enquiryForm01').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  var name = getInput('enquiryName');
  var email = getInput('enquiryEmail');
  var mobile = getInput('enquiryMobile');
	var message = getInput('enquiryMessage');

  $("#enquiryForm01 button").attr("disabled", "true");
  $("#enquiryForm01 input").attr("readonly", "true");
  $("#enquiryForm01 input").css("opacity", ".4");
  $("#enquiryForm01 textarea").css("opacity", ".4");

  $.ajax({

      url:"https://script.google.com/macros/s/AKfycbwTT11k5CllFKikDvUDNBENHZnggx5OImFbg2lZPqfav5GKdtOP2Ed7ggyI8lsIdy8o/exec",
      data:$("#enquiryForm01").serialize(),
      method:"post",
      success:function (response){

          saveEnquiry(name, email, mobile, message);
      },
      error:function (err){
          alert("Something Error")

      }
  })
}
