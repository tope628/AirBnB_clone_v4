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
});
