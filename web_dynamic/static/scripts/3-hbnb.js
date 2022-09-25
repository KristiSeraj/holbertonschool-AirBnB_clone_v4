$(document).ready(function () {
  const apiUrl = 'http://' + window.location.hostname;

  $.get(apiUrl + ':5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  const amenityDictionary = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      amenityDictionary[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityDictionary[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenityDictionary).join(', '));
  });

  $.ajax({
	  url: apiUrl + ':5001/api/v1/places_search/',
	  type: "POST",
	  data: '{}',
	  dataType: "json",
	  contentType: "application/json",
	  success: function(data) {
		  data.map(place => {
		  	$('section.places').append(`
			<article>
		  		<div class="title_box">
		  			<h2>${ place.name }</h2>
		  			<div class="price_by_night">$ ${ place.price_by_night }</div>
		  		</div>
	  			<div class="information">
	    				<div class="max_guest">${ place.max_guest } Guest ${ place.max_guest != 1 ? 's' : ''}</div>
            				<div class="number_rooms">${ place.number_rooms } Bedroom ${ place.number_rooms != 1 ? 's' : ''}</div>
            				<div class="number_bathrooms">${ place.number_bathrooms } Bathroom ${ place.number_bathrooms != 1 ? 's' : ''}</div>
	  			</div>
          			<div class="description">
					${ place.description }
          			</div>
			</article>`)
		  })
	  }
  })
});
