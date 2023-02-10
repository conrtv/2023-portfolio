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
