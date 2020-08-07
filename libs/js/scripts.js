$("#api1").click(function () {
  var button = this.id;

  $.ajax({
    url: "libs/php/functions.php",
    type: "POST",
    dataType: "json",
    data: {
      apiNum: "api1",
      country: $("#selCountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        if (button === "api1") {
          $("#results").find("tbody").empty();
          $.each(result, function (key, value) {
            $.each(value[0], function (k, val) {
              $("#results tbody").append(
                "<tr><td>" + k + "</td><td>" + val + "</td></tr>"
              );
            });
          });
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    },
  });
});

$("#api2").click(function () {
  $.ajax({
    url: "libs/php/functions.php",
    type: "POST",
    dataType: "json",
    data: {
      apiNum: "api2",
      lat: $("#selLat").val(),
      lng: $("#selLng").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#results1, #results3, #results4, #results5").hide();
        $("#results2").show();
        $("#r2Toponym").html(result["data"][0]["toponymName"]);
        $("#r2CountryCode").html(result["data"][0]["countryCode"]);
        $("#r2Type").html(result["data"][0]["fcodeName"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    },
  });
});

$("#api3").click(function () {
  $.ajax({
    url: "libs/php/functions.php",
    type: "POST",
    dataType: "json",
    data: {
      apiNum: "api3",
      lat: $("#selLat").val(),
      lng: $("#selLng").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#results1, #results2, #results4, #results5").hide();
        $("#results3").show();
        $("#r3DateTime").html(result["data"]["datetime"]);
        $("#r3Clouds").html(result["data"]["clouds"]);
        $("#r3Humidity").html(result["data"]["humidity"]);
        $("#r3Temperature").html(result["data"]["temperature"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    },
  });
});

$("#api4").click(function () {
  $.ajax({
    url: "libs/php/functions.php",
    type: "POST",
    dataType: "json",
    data: {
      apiNum: "api4",
      q: $("#selLocation").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#results1, #results2, #results3, #results5").hide();
        $("#results4").show();
        $("#r4TitleA").html(result["data"][0]["title"]);
        $("#r4SummaryA").html(result["data"][0]["summary"]);
        $("#r4UrlA").html(result["data"][0]["wikipediaUrl"]);
        $("#r4TitleB").html(result["data"][1]["title"]);
        $("#r4SummaryB").html(result["data"][1]["summary"]);
        $("#r4UrlB").html(result["data"][1]["wikipediaUrl"]);
        $("#r4TitleC").html(result["data"][2]["title"]);
        $("#r4SummaryC").html(result["data"][2]["summary"]);
        $("#r4UrlC").html(result["data"][2]["wikipediaUrl"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    },
  });
});

$("#api5").click(function () {
  $.ajax({
    url: "libs/php/functions.php",
    type: "POST",
    dataType: "json",
    data: {
      apiNum: "api5",
      lat: $("#selLat").val(),
      lng: $("#selLng").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#results1, #results2, #results3, #results4").hide();
        $("#results5").show();
        $("#r5PlaceA").html(result["data"][0]["placeName"]);
        $("#r5PostCodeA").html(result["data"][0]["postalCode"]);
        $("#r5PlaceB").html(result["data"][1]["placeName"]);
        $("#r5PostCodeB").html(result["data"][1]["postalCode"]);
        $("#r5PlaceC").html(result["data"][2]["placeName"]);
        $("#r5PostCodeC").html(result["data"][2]["postalCode"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR, textStatus, errorThrown);
    },
  });
});
