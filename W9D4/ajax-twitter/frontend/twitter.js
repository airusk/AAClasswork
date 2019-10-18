const FollowToggle = require("./follow_toggle");
debugger
$(function () {
  // $("button").on("click", function () {
  $("button.follow-toggle").each((index, button) => new FollowToggle(button));
});  