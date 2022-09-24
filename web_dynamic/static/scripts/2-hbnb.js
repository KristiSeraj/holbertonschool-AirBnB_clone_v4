$(document).ready(function () {
  const statusUrl = 'http://' + window.location.hostname + ':5001/api/v1/status/';
  $.get(statusUrl, function (data) {
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
});
