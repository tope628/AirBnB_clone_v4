$(function () {
  let aList = [];
  $('li input[type=checkbox]').change(function () {
    let amen = $(this).attr('data-name');
    if (this.checked) {
      aList.push(amen);
    } else {
      aList.splice(aList.indexOf(amen), 1);
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
    .fail(function (jqxhr, textStatus, error) {
      let err = textStatus + ', ' + error;
      console.log(err);
    });
});
