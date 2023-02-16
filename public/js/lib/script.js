// Menu button click scripts
// Toggle between what is shown in the content div
$("#about").click(function () {
  $("#projectsContent").addClass("hidden");
  $("#aboutContent").removeClass("hidden");
  $("#contactContent").addClass("hidden");
});

$("#projects").click(function () {
  $("#projectsContent").removeClass("hidden");
  $("#aboutContent").addClass("hidden");
  $("#contactContent").addClass("hidden");
});

$("#contact").click(function () {
  $("#projectsContent").addClass("hidden");
  $("#aboutContent").addClass("hidden");
  $("#contactContent").removeClass("hidden");
});

// Graduation Count Down Timer
var countDownDate = new Date("December 8, 2023 9:00:00");

//update the countdown every second
var x = setInterval(function () {
  // Get todays date
  var today = Date.now();
  //Find time between
  var timeBetween = countDownDate - today;
  //Calculate time
  var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

  //Display the countdown
  $("#time").text(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

  //If countdown is done say graduated
  if (timeBetween < 0) {
    $("#time").text("Graduated!");
  }
}, 1000);

//590

// window.resize(function () {
//   var pageWidth = $(window).width();
//   if ($(window).width() < 590) {
//     $("#bottomLayer").removeClass("spacer");
//     $("#bottomLayer").addClass("display:none");
//   } else {
//     $("#bottomLayer").removeClass("display:none");
//     $("#bottomLayer").addClass("spacer");
//   }
// });
