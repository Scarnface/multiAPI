<?php

	$executionStartTime = microtime(true) / 1000;

  if(isset($_POST['apiNum'])) {
    if($_POST['apiNum'] == 'api1') {
      $url = 'http://api.geonames.org/countryInfoJSON';
      $query_fields = [
        'formatted' => 'true',
        'lang' => 'en',
        'username' => 'scarnface',
        'style' => 'full',
        'country' => $_REQUEST['country']
      ];
    } elseif($_POST['apiNum'] == 'api2') {
      $url = 'http://api.geonames.org/findNearbyPlaceNameJSON';
      $query_fields = [
        'formatted' => 'true',
        'lang' => 'en',
        'username' => 'scarnface',
        'style' => 'full',
        'lat' => $_REQUEST['lat'],
        'lng' => $_REQUEST['lng'],             
      ];
    } elseif($_POST['apiNum'] == 'api3') {
      $url = 'http://api.geonames.org/findNearByWeatherJSON';
      $query_fields = [
        'formatted' => 'true',
        'lang' => 'en',
        'username' => 'scarnface',
        'style' => 'full',  
        'lat' => $_REQUEST['lat'],
        'lng' => $_REQUEST['lng'],  
      ];
    } elseif($_POST['apiNum'] == 'api4') {
      $url = 'http://api.geonames.org/wikipediaSearchJSON';
      $query_fields = [
        'formatted' => 'true',
        'lang' => 'en',
        'username' => 'scarnface',
        'style' => 'full', 
        'maxRows' => 3, 
        'q' => $_REQUEST['q'],
      ];
    } elseif($_POST['apiNum'] == 'api5') {
      $url = 'http://api.geonames.org/findNearbyPostalCodesJSON';
      $query_fields = [
        'formatted' => 'true',
        'lang' => 'en',
        'username' => 'scarnface',
        'radius' => 10,
        'style' => 'full', 
        'maxRows' => 3, 
        'lat' => $_REQUEST['lat'],
        'lng' => $_REQUEST['lng'],
      ];
    }
  }

  $curl = curl_init($url . '?' . http_build_query($query_fields));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $response = json_decode(curl_exec($curl), true);
  curl_close($curl);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
  $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
  if(isset($_POST['apiNum'])) {
    if($_POST['apiNum'] == 'api1' or $_POST['apiNum'] == 'api2' or $_POST['apiNum'] == 'api4') {
      $output['data'] = $response['geonames'];
    } elseif($_POST['apiNum'] == 'api3') {
      $output['data'] = $response['weatherObservation'];
    } elseif($_POST['apiNum'] == 'api5') {
      $output['data'] = $response['postalCodes'];
    }
  }
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>
