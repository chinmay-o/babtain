let applicationRef = firebase.database().ref('career-database');
var resumeURL;

var uploadProgress = setInterval(function() {

  if (document.querySelector('#candid-resume').files[0] != null) {

    $('.loadingResume').css("display", "none");
    resumeUpload();
    clearInterval(uploadProgress);
  }
}, 200)

document.getElementById('apply-career').addEventListener('submit', submitCareerForm);

function submitCareerForm(e) {

  e.preventDefault();

  var name = getInput('candid-name');
  var last = getInput('candid-last');
  var email = getInput('candid-email');
  var city = getInput('candid-city');

  saveProfile(name, last, email, city);
}

function saveProfile(name, last, email, city) {

  var profileData = applicationRef.push();
  profileData.set({

      timestamp: moment().format('DD/MM/YYYY h:mm:ss a'),
      name: name,
      last: last,
      email: email,
      city: city,
      resume: resumeURL,
    })
    .then(function() {

      console.log('Synchronization succeeded');
      careerLogForm();
      ajaxLog();
      $('#apply-career')[0].reset();
      $('#success').css("display", "block");

    })
    .catch(function(error) {

      console.log('Synchronization failed');
      $('#error').css("display", "block");
    });
}

function resumeUpload() {

  const ref = firebase.storage().ref();
  const file = document.querySelector('#candid-resume').files[0];
  const name = (+new Date()) + '-' + file.name;
  const metadata = {
    contentType: file.type
  };
  const task = ref.child(name).put(file, metadata);

  task.then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
      resumeURL = url;
    })
    .catch(console.error);
}

function careerLogForm() {

  $("#careerLogName").val(getInput('candid-name'));
  $("#careerLogLast").val(getInput('candid-last'));
  $("#careerLogEmail").val(getInput('candid-email'));
  $("#careerLogCity").val(getInput('candid-city'));
  $("#careerLogURL").val(resumeURL);
}

function ajaxLog() {

  $("#careerLogURL").val();
  $.ajax({

      url:"https://script.google.com/macros/s/AKfycbwTT11k5CllFKikDvUDNBENHZnggx5OImFbg2lZPqfav5GKdtOP2Ed7ggyI8lsIdy8o/exec",
      data:$("#careerLogForm").serialize(),
      method:"post",
      success:function (response){

          console.log("Log Success");
          $('#careerLogForm')[0].reset();
      },
      error:function (err){
          alert("Something Error");

      }
  })
}

function getInput(id) {

  return document.getElementById(id).value;
}
