$("#api1, #api2, #api3, #api4, #api5").click(function () {
  //Pulls the apiNum variable from the button triggering the click event
  var button = this.id;

  //Sets the data to send depending on the API used.
  if (button === "api1") {
    var dataToSend = {
      apiNum: "api1",
      country: $("#selCountry").val(),
    };
  } else if (button === "api2") {
    var dataToSend = {
      apiNum: "api2",
      lat: $("#selLat").val(),
      lng: $("#selLng").val(),
    };
  } else if (button === "api3") {
    var dataToSend = {
      apiNum: "api3",
      lat: $("#selLat").val(),
      lng: $("#selLng").val(),
    };
  } else if (button === "api4") {
    var dataToSend = { apiNum: "api4", q: $("#selLocation").val() };
  } else if (button === "api5") {
    var dataToSend = {
      apiNum: "api5",
      lat: $("#selLat").val(),
      lng: $("#selLng").val(),
    };
  }

  $.ajax({
    url: "libs/php/functions.php",
    type: "POST",
    dataType: "json",
    data: dataToSend,
    success: function (result) {
      console.log(result);
      if (result.status.name == "ok") {
        //Removes any existing table
        $("#results").find("tbody").empty();

        //Loops the JSON depending on whether it contains an array or object
        $.each(result, function (key, value) {
          if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
              $.each(value[i], JSONIterator);
              //Adds an empty row between results
              $("#results tbody").append(
                '<tr><td colspan="2">' + "" + "</td></tr>"
              );
            }
          } else {
            $.each(value, JSONIterator);
          }
        });

        function JSONIterator(key, value) {
          if (value != null && typeof value == "object") {
            // Recurse into children
            $.each(value, JSONIterator);
          } else {
            //Removes request info from JSON and adds to results table
            if (
              key !== "code" &&
              key !== "name" &&
              key !== "description" &&
              key !== "returnedIn"
            ) {
              $("#results tbody").append(
                "<tr><td>" + key + "</td><td>" + value + "</td></tr>"
              );
            }
          }
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    },
  });
});
