$(document).ready(function () {
  const amenityDictionary = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      amenityDictionary[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityDictionary[$(this).attr('data-id')];
    }
    console.log(amenityDictionary);
  });
});
