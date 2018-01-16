$(() => {
  let aList = [];
  $('li input[type=checkbox]').change(function () {
    let amen = $(this).attr('data-name');
    if (this.checked) {
      aList.push(amen);
    } else {
      aList.splice(aList.indexOf(amen), 1);
    }
    $('.amenities h4').text(aList.join(', '));
  });
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function (data) {
    // if (this
    // $('div#api_status').addClass('available');
    alert('Data Loaded: ' + data);
    // } else {
    // $('div#api_status').removeClass('available');
    // }
  });
});
