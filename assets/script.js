$(document).ready(function () {
  $(".selector").on("change", function (event) {
    //get the previous value. when selecting for the first time the value will be undefined.
    let preValue = $(this).data("previous");

    //if the previous value is not undefined, show the values in other selectors.
    $(".selector").not(this).find(`option[value="${preValue}"]`).show();

    let newValue = $(this).val();

    // saving the selected value as previous for the next change (preValue).
    $(this).data("previous", newValue);

    //hiding the value selected from the other selectors
    $(".selector").not(this).find(`option[value="${newValue}"]`).hide();
  });
});

// Form event
$("#select-form").submit(function (event) {
  event.preventDefault(); //prevent submitting

  // get form results in an array
  let formResult = $(this)
    .serializeArray()
    .map(({ value }) => value);

  console.log(formResult);
  showToast(formResult);
});

//Custom toast
function showToast(toastMsg) {
  var snackBar = document.getElementById("snackbar");
  snackBar.innerHTML = toastMsg;
  snackBar.className = "show";
  setTimeout(function () {
    snackBar.className = "";
  }, 2000);
}
