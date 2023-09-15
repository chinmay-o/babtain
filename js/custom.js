
$(".card").click(function() {

  var service = $(this).parent().find("h3").text();
  window.location.replace("https://wa.me/971567552454?text=Hello,+I+am+interested+to+know+about+chandler+service+of+" + service);
});
