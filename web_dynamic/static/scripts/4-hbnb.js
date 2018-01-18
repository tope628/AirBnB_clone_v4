$(function () {
  let aList = [];
  let amIdList = [];
  $('li input[type=checkbox]').change(function () {
    let amen = $(this).attr('data-name');
    let id = $(this).attr('data-id');
    if (this.checked) {
      aList.push(amen);
      amIdList.push(id);
    } else {
      aList.splice(aList.indexOf(amen), 1);
      amIdList.splice(amIdList.indexOf(id, 1));
    }
    $('.amenities h4').html(aList.length > 0 ? aList.join(', ') : '&nbsp;');
  });
  $.getJSON('http://0.0.0.0:5001/api/v1/status/')
    .done(function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    })
    .fail(function (jqxhr, testStatus, error) {
      let err = testStatus + ', ' + error;
      console.log(err);
    });
  function search_places (data) {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search',
      data: data,
      contentType: 'application/json',
      success: function (js) {
	  for (let place of js) {
          $.getJSON('http://0.0.0.0:5051/api/v1/users/' + place.user_id, function (user) {
	      $('.places ').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="user"><p><b>Owner: </b>' + user.first_name + '  ' + user.last_name + '</p></div><div class="description"><p>' + place.description + '</p></div></article>');
	    });
	  }
      }
    });
  }
  search_places('{}');
  $('.filters button').click(function () {
    $('.places  article').remove();
    search_places(JSON.stringify({'amenities': amIdList}));
  });
});
