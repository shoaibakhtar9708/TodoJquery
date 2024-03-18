$(document).ready(function () {
  var formData = [];

  $("#submitForm").click(function (e) {
    e.preventDefault();
    let employeeName = $("#employeeName").val();
    let employeeId = $("#employeeId").val();
    let city = $("#city").val();
    let state = $("#state").val();

    // Create an object to store form data
    var employeeData = {
      name: employeeName,
      employeeId: employeeId,
      city: city,
      state: state,
    };

    // Push the form data object into the array
    formData.push(employeeData);

    // Logging the array of objects to console (for demonstration)
    console.log(formData);

    // Clearing the form after submission
    $("#employeeName").val("");
    $("#employeeId").val("");
    $("#city").val("");
    $("#state").val("");

    displayData();
  });

  function displayData() {
    let tableBody = $("employeeTable tbody");
    console.log(tableBody);
    tableBody.empty();

    formData.array.forEach((data, idx) => {
      var row = $("<tr>");
      row.append($("<th>").text(index + 1));
      row.append($("<td>").text(data.name));
      row.append($("<td>").text(data.employeeId));
      row.append($("<td>").text(data.city));
      row.append($("<td>").text(data.state));
      tableBody.append(row);
    });
  }
});
