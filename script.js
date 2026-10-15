// Start after the HTML is ready.
$(document).ready(function () {
  // Hide the clicked paragraph, as shown in the notes.
  $("#intro").click(function () {
    $(this).hide();
    $("#show-intro").trigger("focus");
  }).keydown(function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      $(this).trigger("click");
    }
  });

  $("#show-intro").click(function () {
    $("#intro").show();
  });

  $("#welcome-button").click(function () {
    $("#message").html("Welcome to Jonathan URK24CS1112 Fitness Store!");
  });

  // Select a product and fill its price using .val().
  $(".choose").click(function () {
    $("#price").val($(this).attr("data-price")).trigger("input").trigger("focus");
  });

  // Read two values, add them, and display the result.
  $("#cost-form").submit(function (event) {
    event.preventDefault();
    var price = Number($("#price").val());
    var delivery = Number($("#delivery").val());
    var total = price + delivery;
    if (!Number.isFinite(total) || price < 0 || delivery < 0) {
      $("#box").text("Enter valid, non-negative amounts.");
      return;
    }
    $("#result").val(total.toFixed(2));
    $("#box").html("Total cost: <strong>Rs. " + total.toFixed(2) + "</strong>");
  });

  $("#price, #delivery").on("input", function () {
    $("#result").val("");
    $("#box").text("");
  });
});
